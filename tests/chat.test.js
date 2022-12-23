const request = require("supertest")
const mongoose = require("mongoose")


const app = require("../app")

beforeAll(done => {
    mongoose.connect("mongodb://127.0.0.1:27017")
        .then(() => done())
})

describe("Given a customer object", () => {

    test("Should create and return a chat object", async () => {

        const response = await request(app).post("/chats/create").send({
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "46581"
        })

        expect(response.body.customer.firstName).toBe("John")
        expect(response.body.customer.lastName).toBe("Doe")
        expect(response.body.customer.phoneNumber).toBe("46581")

    })

    test("Status code should be 200", async () => {

        const initialChat = await request(app).post("/chats/create").send({
            firstName: "Philip",
            lastName: "Doe",
            creditCard: "1428"
        })

        const response =  await request(app).put(`/chats/edit/${initialChat.body._id.toString()}`).send({
            chat: {
                isFavourite: true
            },
            customer: {
                firstName: "Felipe"
            }
        })

        expect(response.statusCode).toBe(200)

    })

})

afterAll(done => {
    mongoose.connection.close()
    done()
})

