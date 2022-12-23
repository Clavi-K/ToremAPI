/* ----- REQUIRED IMPOTRS ----- */

const service = require("../services/chat.service")

/* ---------- */

/* ----- EXPORT CONTROLLER ----- */

module.exports = {

    create: async (req, res) => {

        const customer = req.body

        try {

            const newChat = await service.create(customer)
            return res.status(201).send(newChat)

        } catch (e) {
            console.log(e)
            return res.status(500).send({ error: e.message || e })
        }

    },

    getById: async (req, res) => {

        const { chatId } = req.params

        try {

            const chat = await service.getById(chatId)
            return res.status(200).send(chat)

        } catch (e) {
            console.log(e)
            return res.status(500).send({ error: e.message || e })
        }

    },

    edit: async (req, res) => {

        const { chatId } = req.params
        const { chat, customer } = req.body

        try {

            await service.edit(chatId, chat, customer)
            return res.status(200).send("Successfully updated chat!")

        } catch (e) {
            console.log(e)
            return res.status(500).send({ msg: e.message || e })
        }

    },

    delete: async (req, res) => {

        const { chatId } = req.params

        try {

            await service.delete(chatId)
            return res.status(200).send("Chat deleted successfully!")

        } catch (e) {
            console.log(e)
            return res.status(500).send({ msg: e.message || e })
        }

    }

}

/* ---------- */