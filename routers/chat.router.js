/* ----- REQUIRED IMPORTS ----- */

const express = require("express")

const controller = require("../controllers/chat.controller")

/* ---------- */

/* ----- ROUTER ----- */

const router = express.Router()

/* ---------- */

/* ----- ROUTES ----- */

router.post("/create", controller.create)

router.get("/getById/:chatId", controller.getById)

router.put("/edit/:chatId", controller.edit)

router.delete("/delete/:chatId", controller.delete)

/* ---------- */

/* ----- ROUTER EXPORT ----- */

    module.exports = router

/* ---------- */