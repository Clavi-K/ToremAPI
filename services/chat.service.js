/* ----- REQUIRED IMPORTS ----- */

const chatSchema = require("../schemas/chat.schema")

const messageSchema = require("../schemas/message.schema")
const customerSchema = require("../schemas/customer.schema")

const vCustomerSchema = require("../schemas/vip.customer.schema")
const rCustomerSchema = require("../schemas/regular.customer.schema")

/* ---------- */

/* ----- SERVICE EXPORT ----- */

module.exports = {

    create: async (customer) => {

        if (!customer.firstName || typeof customer.firstName !== "string") {
            throw new Error("Missing or invalid customer first name input!")
        }

        if (!customer.lastName || typeof customer.lastName !== "string") {
            throw new Error("Missing or invalid customer first name input!")
        }


        try {
            let response

            if (customer.creditCard && typeof customer.creditCard === "string") {
                response = await vCustomerSchema.create(customer)
            } else if (customer.phoneNumber && typeof customer.phoneNumber === "string") {
                response = await rCustomerSchema.create(customer)
            }

            const newChat = await chatSchema.create({
                isFavourite: false,
                customerId: response._id,
            })

            const dbCustomer = await customerSchema.getById(newChat.customerId)
            const messages = await messageSchema.getByChatId(newChat._id.toString())

            return {
                isFavourite: newChat.isFavourite,
                customer: dbCustomer,
                messages
            }

        } catch (e) {
            console.log(e)
            throw new Error(e.message || e)
        }

    },

    getById: async (chatId) => {

        if (!chatId || typeof chatId !== "string") {
            throw new Error("Missing or invalid chat ID input!")
        }

        try {

            const chat = await chatSchema.getById(chatId)
            const customer = await customerSchema.getById(chat.customerId)
            const messages = await messageSchema.getByChatId(chatId)

            return {
                isFavourite: chat.isFavourite,
                messages,
                customer
            }

        } catch (e) {
            console.log(e)
            throw new Error(e.message || e)
        }

    },


    edit: async (chatId, chat, customer) => {

        if (!chatId || typeof chatId !== "string") {
            throw new Error("Missing or invalid chat ID input!")
        }

        try {

            if (typeof chat.isFavourite !== "boolean") {
                throw new Error("Invalid chat update format!")
            }

            const dbChat = await chatSchema.getById(chatId)
            await chatSchema.edit(chatId, chat)

            await customerSchema.edit(dbChat.customerId, customer)


        } catch (e) {
            console.log(e)
            throw new Error(e.message || e)
        }

    },

    delete: async (chatId) => {

        if (!chatId || typeof chatId !== "string") {
            throw new Error("Missing or invalid chat ID input!")
        }

        try {

            const chat = await chatSchema.getById(chatId)
            if (!chat) {
                throw new Error("Chat does not exist!")
            }

            await chatSchema.delete(chatId)
            await customerSchema.delete(chat.customerId)
            await messageSchema.deleteByChatId(chatId)

        } catch (e) {
            console.log(e)
            throw new Error(e.message || e)
        }

    }

}

/* ---------- */