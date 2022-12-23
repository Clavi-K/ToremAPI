/* ----- ENVIROMENT VARIABLES FILE CONFIG ----- */

require("dotenv").config({ path: ".env" })

/* ---------- */

/* ----- REQUIRED IMPORTS ----- */

const express = require("express")
const mongoose = require("mongoose")

const config = require("./config")
const routers = require("./routers")

/* ---------- */

/* ----- VARIABLES ----- */

const PORT = process.env.PORT || 8082

/* ---------- */

/* ----- APP INITIALIZATION ----- */

const app = express()

/* ---------- */

/* ----- DATABASE CONNECTION ----- */

mongoose.set("strictQuery", true)
mongoose.connect(`${config.atlas.SCHEMA}://${config.atlas.USER}:${config.atlas.PASSWORD}@${config.atlas.HOSTNAME}/${config.atlas.DATABASE}?${config.atlas.OPTIONS}`)
    .then(() => {

        /* ----- MIDDLEWARES ----- */

        app.use(express.json())
        app.use(express.urlencoded({ extended: false }))

        /* ---------- */

        /* ----- ROUTERS ----- */

        app.use("/", routers)

        /* ---------- */

        /* ----- ERROR CATCHING ENDWARE ----- */

        app.use((err, req, res, next) => {

            const status = err.status || 500
            const msg = err.message || err

            console.log(err)

            return res.status(status).json({ error: msg })

        })

        /* ---------- */

        /* ----- APP LISTENING ----- */

        app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))

        /* ---------- */
    })

/* ---------- */