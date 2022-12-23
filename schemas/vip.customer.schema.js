/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")

const customerModel = require("./customer.schema").model

/* ---------- */

/* ----- DATABASE SCHEMA ----- */

class VipCustomerSchema {

    constructor() {

        const schema = new Schema({
            creditCard: { type: String, required: true }
        })

        this.model = customerModel.discriminator("VipCustomer", schema)

    }

    /* ----- METHODS ----- */

    async create(vCustomer) {
        return await this.model.create(vCustomer)
    }

    async edit(customerId, customer) {
        await this.model.updateOne({ _id: customerId }, customer, { upsert: false })
    }

    /* ---------- */
}


/* ----- SCHEMA EXPORT ----- */

module.exports = new VipCustomerSchema()

/* ---------- */