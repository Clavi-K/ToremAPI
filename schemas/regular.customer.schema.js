/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")
const customerModel = require("./customer.schema")

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class RegularCustomerSchema {

    constructor() {

        const schema = new Schema({
            phoneNumber: { type: String, required: true }
        })

        this.model = customerModel.discriminator("RegularCustomer", schema)

    }

    /* ----- METHODS ----- */

    async create(rCustomer) {
        await this.model.create(rCustomer)
    }

    /* ---------- */
}

/* ---------- */

/* ----- SCHEMA EXPORT ----- */

module.exports = new RegularCustomerSchema()

/* ---------- */