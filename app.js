/* ----- REQUIRED IMPORTS ----- */

const express = require("express")

const routers = require("./routers")

/* ---------- */

/* ----- APP INITIALIZATION ----- */

const app = express()

/* ---------- */

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

/* ----- APP EXPORT ----- */

module.exports = app

/* ---------- */
