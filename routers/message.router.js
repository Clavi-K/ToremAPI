/* ----- REQUIRED IMPORTS ----- */

const express = require("express")

const controller = require("../controllers/message.controller.js")

/* ---------- */

/* ----- ROUTER ----- */

const router = express.Router()

/* ---------- */

/* ----- ROUTES ----- */

router.post("/create/:chatId", controller.create)

router.get("/getByChat/:chatId", controller.getByChat)

/* ---------- */

/* ----- ROUTER EXPORT ----- */

module.exports = router

/* ---------- */