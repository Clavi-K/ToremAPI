/* ----- REQUIRED IMPORTS ----- */

const express = require("express")

/* ---------- */

/* ----- MAIN ROUTER ----- */

const router = express.Router()

/* ---------- */

/* ----- ROUTERS ----- */



/* ---------- */

/* ----- INVALID ROUTE ENDWARE ----- */

router.use("*/*", (req, res, next) => {
    console.warn(`${req.protocol + "://" + req.get("host") + req.originalUrl} Not found`);

    try {
       return res.status(404).json({ msg: `This page doesn't exists` });
    } catch (error) {
        next(error);
    }
});

/* ---------- */

/* ----- EXPORT MODULE ----- */

module.exports = router

/* ---------- */