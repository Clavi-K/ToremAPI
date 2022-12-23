/* ----- ENVIROMENT VARIABLES FILE CONFIG ----- */

require("dotenv").config()

/* ---------- */

/* ----- REQUIRED IMPORTS ----- */

const mongoose = require("mongoose")

const config = require("./config")
const app = require("./app")

/* ---------- */

/* ----- VARIABLES ----- */

const PORT = process.env.PORT || 8082

/* ---------- */

/* ----- DATABASE CONNECTION ----- */

mongoose.set("strictQuery", true)
mongoose.connect(`${config.atlas.SCHEMA}://${config.atlas.USER}:${config.atlas.PASSWORD}@${config.atlas.HOSTNAME}/${config.atlas.DATABASE}?${config.atlas.OPTIONS}`)
    .then(() => {

        /* ----- APP LISTENING ----- */

        app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))

        /* ---------- */
    })


/* ---------- */