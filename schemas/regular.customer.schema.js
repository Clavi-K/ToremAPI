/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

const customerModel = require("./customer.schema").model

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
        return await this.model.create(rCustomer)
    }

    async edit(customerId, customer) {
        await this.model.updateOne({ _id: customerId }, customer, { upsert: false })
    }

    /* ---------- */
}

/* ---------- */

/* ----- SCHEMA EXPORT ----- */

module.exports = new RegularCustomerSchema()

/* ---------- */