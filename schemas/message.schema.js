/* ----- RQEUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class MessageSchema {

    constructor() {

        const schema = new Schema({
            timestamp: { type: Date, required: true },
            isReceived: { type: Boolean, required: true },
            chatId: { type: Schema.Types.ObjectId, ref: "Chat", required: true }
        })

        this.model = model("Message", schema)

    }

    /* ----- METHODS ----- */

    async getByChatId(chatId) {
        return await this.model.find({ chatId })
    }

    async deleteByChatId(chatId) {
        await this.model.deleteMany({ chatId })
    }

    /* ---------- */

}

/* ---------- */

/* ----- MODEL EXPORT ----- */

module.exports = new MessageSchema()

/* ---------- */