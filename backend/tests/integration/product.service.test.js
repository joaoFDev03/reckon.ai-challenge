import request from "supertest";
import app from "../../src/app.js";
import { Product } from "../../src/model/product.model.js";
import { describe, expect } from "@jest/globals";

describe("Products API", () => {
  beforeEach(async () => {
    await Product.deleteMany({});
  });

  it("POST /products — creates product", async () => {
    const res = await request(app)
      .post("/products")
      .send({
        productName: "Cenoura",
        description: "Nice",
        price: 10,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.productName).toBe("Cenoura");
  });

  it("GET /products — returns list", async () => {
    await Product.create({
      productName: "Teste",
      description: "D",
      price: 2,
    });

    const res = await request(app).get("/products");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it("GET /products/:id — returns product", async () => {
    const created = await Product.create({
      productName: "Cenoura",
      description: "Doce",
      price: 20,
    });

    const res = await request(app).get(`/products/${created._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.productName).toBe("Cenoura");
  });

  it("PUT /products/:id — updates a product", async () => {
    const created = await Product.create({
      productName: "Metal",
      description: "liquid",
      price: 10,
    });

    const res = await request(app)
      .put(`/products/${created._id}`)
      .send({ productName: "Teste", price: 12, description: "hard" });

    expect(res.statusCode).toBe(200);
    expect(res.body.productName).toBe("Teste");
  });

  it("DELETE /products/:id — deletes product", async () => {
    const created = await Product.create({
      productName: "ToDelete",
      description: "X",
      price: 99,
    });

    const res = await request(app).delete(`/products/${created._id}`);
    expect(res.statusCode).toBe(200);

    const dbCheck = await Product.findById(created._id);
    expect(dbCheck).toBeNull();
  });
});
