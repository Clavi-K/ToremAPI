/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class ChatSchema {

    constructor() {

        const schema = new Schema({
            isFavourite: { type: Boolean, required: true },
            customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true },
        })

        this.model = model("Chat", schema)

    }

    /* ----- METHODS ----- */

    async create(chat) {
        return await this.model.create(chat)
    }

    async getById(chatId) {
        return await this.model.findById(chatId)
    }

    async edit(chatId, chat) {
        await this.model.updateOne({ _id: chatId }, chat, { upsert: false })
    }

    async delete(chatId) {
        await this.model.deleteOne({_id: chatId})
    }

    /* ---------- */

}

/* ---------- */

/* ----- SCHEMA EXPORT ----- */

module.exports = new ChatSchema()

/* ---------- */