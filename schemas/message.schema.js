/* ----- RQEUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class MessageSchema {

    constructor() {

        const schema = new Schema({
            timestamp: { type: Date, required: true },
            isReceived: { type: Boolean, required: true}
        })

        this.model = model("Message", schema)

    }

}

/* ---------- */

/* ----- MODEL EXPORT ----- */

module.exports = new MessageSchema().model

/* ---------- */