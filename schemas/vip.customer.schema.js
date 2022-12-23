/* ----- REQUIRED IMPORTS ----- */

const { Schema, model } = require("mongoose")
const customerModel = require("./customer.schema")

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
        await this.model.create(vCustomer)
    }

    /* ---------- */
}


/* ----- SCHEMA EXPORT ----- */

module.exports = new VipCustomerSchema()

/* ---------- */