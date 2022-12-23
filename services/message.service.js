/* ----- REQUIRED IMPORTS ----- */

const messageSchema = require("../schemas/message.schema")
const chatSchema = require("../schemas/chat.schema")

const tMessageSchema = require("../schemas/text.message.schema")
const lMessageSchema = require("../schemas/location.message.schema")

/* ---------- */

/* ----- SERVICE EXPORT ----- */

module.exports = {

    create: async (chatId, message) => {
        if (!chatId || typeof chatId !== "string") {
            throw new Error("Missing or invalid chat ID input!")
        }

        if (typeof message.isReceived !== "boolean") {
            throw new Error("Missing or invalid message received flag!")
        }

        try {

            const chat = chatSchema.getById(chatId)
            if (!chat) {
                throw new Error("Chat does not exist!")
            }

            message.timestamp = new Date(Date.now())
            message.chatId = chatId

            let newMessage

            if (message.text && typeof message.text === "string") {
                newMessage = await tMessageSchema.create(message)
            } else if (typeof message.latitude === "string" && typeof message.longitude === "string") {
                newMessage = await lMessageSchema.create(message)
            }

            if (!newMessage) {
                throw new Error("Invalid message input!")
            }

            return newMessage

        } catch (e) {
            console.log(e)
            throw new Error(e.message || e)
        }

    },

    getByChat: async (chatId) => {

        if (!chatId || typeof chatId !== "string") {
            throw new Error("Missing or invalid chat ID input!")
        }

        try {

            const chat = await chatSchema.getById(chatId)
            if (!chat) {
                throw new Error("Chat does not exist!")
            }

            const messages = await messageSchema.getByChatId(chatId)
            return messages

        } catch (e) {
            console.log(e)
            throw new Error(e.message || e)
        }

    }

}

/* ---------- */