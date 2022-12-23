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

    /* ----- METHODS ----- */

    async getById(customerId) {
        return await this.model.findById(customerId)
    }

    async edit(customerId, customer) {
        const dbCustomer = await this.model.findById(customerId)

        for(const prop in customer) {
            if(dbCustomer[prop]) dbCustomer[prop]  = customer[prop]
        }

        await dbCustomer.save()
    }

    async delete(customerId) {
        await this.model.deleteOne({ _id: customerId })
    }

    /* ---------- */

}

/* ----- MODEL EXPORT ----- */

module.exports = new CustomerSchema()

/* ---------- */