/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")
const messageModel = require("./message.schema")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class TextMessageSchema {

    constructor() {

        const schema = new Schema({
            text: { type: String, required: true }
        })

        this.model = messageModel.discriminator("TextMessage", schema)

    }

    /* ----- METHODS ----- */

    async create(msg) {
        await this.model.create(msg)
    }

    /* ---------- */
}

/* ---------- */

/* ----- SCHEMA EXPORT ----- */

module.exports = new TextMessageSchema()

/* ---------- */