import { validateProduct } from "../../../src/middleware/validateProduct.js";
import { describe, expect, jest } from "@jest/globals";

describe("validateProduct middleware", () => {
  let req, res, next;

  beforeEach(() => {
    next = jest.fn();
    req = { body: {} };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("should fail when productName is missing", () => {
    req.body = { price: 10, description: "ok" };

    validateProduct(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "ProductName is required!",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should fail when price is missing", () => {
    req.body = { productName: "A", description: "ok" };

    validateProduct(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Price is required!",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should fail when description is not text", () => {
    req.body = { productName: "A", price: 10, description: 123 };

    validateProduct(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Description has to be a text",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should fail when price is not number", () => {
    req.body = { productName: "A", price: "10", description: "ok" };

    validateProduct(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Price has to be number >= 0",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should fail when price < 0", () => {
    req.body = { productName: "A", price: -2, description: "ok" };

    validateProduct(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Price has to be number >= 0",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should call next if valid", () => {
    req.body = { productName: "A", price: 10, description: "Good" };

    validateProduct(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });
});
