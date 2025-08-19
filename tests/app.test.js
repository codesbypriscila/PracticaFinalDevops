const request = require("supertest");
const { createApp } = require("../src/server");

describe("GET /", () => {
  it("responde Hola Mundo", async () => {
    const app = createApp();
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hola Mundo");
  });
});

describe("GET /health", () => {
  it("responde status ok", async () => {
    const app = createApp();
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: "ok" });
  });
});
