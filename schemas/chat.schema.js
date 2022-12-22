/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class ChatSchema {

    constructor() {

        const schema = new Schema({
            isFavourite: { type: Boolean, required: true },
            customerId: { type: Schema.Types.ObjectId, ref: "Customer", required: true }
        })

        this.model = model("Chat", schema)

    }

    /* ----- METHODS ----- */

    async create(chat) {
        await this.model.create(chat)
    }

    /* ---------- */

}

/* ---------- */

/* ----- SCHEMA EXPORT ----- */

module.exports = new ChatSchema()

/* ---------- */