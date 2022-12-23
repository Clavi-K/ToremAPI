/* ----- RQEUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class CustomerSchema {

    constructor() {

        const schema = new Schema({
            firstName: { type: String, required: true },
            lastName: { type: String, required: true }
        })

        this.model = model("Customer", schema)

    }

}

/* ----- SCHEMA EXPORT ----- */

module.exports = new CustomerSchema().model

/* ---------- */