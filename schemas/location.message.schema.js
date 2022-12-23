/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")
const messageModel = require("./message.schema")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class LocationMessageSchema {

    constructor() {

        const schema = new Schema({
            latitude: { type: String, required: true },
            longitude: { type: String, required: true }
        })

        this.model = messageModel.discriminator("LocationMessage", schema)

    }

    /* ----- METHODS ----- */

    async create(lMessage) {
        await this.model.create(lMessage)
    }

    /* ---------- */

}

/* ----- SCHEMA EXPORT ----- */

module.exports = new LocationMessageSchema()

/* ---------- */