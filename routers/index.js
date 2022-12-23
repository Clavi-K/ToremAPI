/* ----- REQUIRED IMPORTS ----- */

const express = require("express")

const chatRouter = require("./chat.router")
const messageRouter = require("./message.router")

/* ---------- */

/* ----- MAIN ROUTER ----- */

const router = express.Router()

/* ---------- */

/* ----- ROUTERS ----- */

router.use("/chats", chatRouter)
router.use("/messages", messageRouter)

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