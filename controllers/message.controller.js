/* ----- REQUIRED IMPORTS ----- */

const service = require("../services/message.service")

/* ---------- */

/* ----- EXPORT CONTROLLER ----- */

module.exports = {

    create: async (req, res) => {

        const { chatId } = req.params
        const message = req.body

        try {

            const newMessage = await service.create(chatId, message)
            return res.status(201).send(newMessage)

        } catch (e) {
            console.log(e)
            return res.status(500).send({ error: e.message || e })
        }

    },

    getByChat: async (req, res) => {

        const { chatId } = req.params

        try {

            const messages = await service.getByChat(chatId)
            return res.status(200).send(messages)

        } catch (e) {
            console.log(e)
            return res.status(500).send({ msg: e.message || e })
        }

    }

}

/* ---------- */