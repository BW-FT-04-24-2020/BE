const request = require('supertest');
const server = require('../api/server');

describe("register", () => {
    it("should return 201 OK", async() => {
        return request(server)
            .post("/api/auth/register")
            .send({ name: "simontesting101", password: "passing", email: "simontesting101@gmail.com" })
            .then(res => {
                expect(res.status).toBe(201);
            })
    })

    it("should return json", async() => {
        return request(server)
            .post("/api/auth/register")
            .send({ name: "simontesting202", password: "passing", email: "simontesting202@gmail.com" })
            .then(res => {
                expect(res.type).toBe("application/json");
            });
    })
})



describe("login", () => {
    it("should return 200 OK", async() => {
        return request(server)
            .post("/api/auth/login")
            .send({ email: "simontesting1@gmail.com", password: "passing" })
            .then(res => {
                expect(res.status).toBe(200);
            })
        })

    it("should return json", async() => {
        return request(server)
            .post("/api/auth/login")
            .send({ email: "simontesting2@gmail.com", password: "passing" })
            .then(res => {
                expect(res.type).toBe("application/json");
            })
    })
})