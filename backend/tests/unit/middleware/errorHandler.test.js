
import { errorHandler } from "../../../src/middleware/errorHandler.js";
import { describe, expect, jest } from "@jest/globals";

describe("errorHandler middleware", () => {
  let req, res, next;

  beforeEach(() => {
    req = {};
    next = jest.fn();

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    jest.spyOn(console, "error").mockImplementation(() => {});
  });

  it("Handles Mongoose ValidationError → 400", () => {
    const err = {
      name: "ValidationError",
      errors: { field: "invalid" },
    };

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Validation failed",
      errors: err.errors,
    });
  });

  it("Handles error with explicit status → err.status", () => {
    const err = {
      status: 409,
      message: "Product already exists",
    };

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(409);
    expect(res.json).toHaveBeenCalledWith({
      message: "Product already exists",
    });
  });

  it("Handles Mongoose CastError → 400", () => {
    const err = {
      name: "CastError",
    };

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid ID format",
    });
  });

  it("Handles generic errors → 500", () => {
    const err = {
      message: "Something exploded",
    };

    errorHandler(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: "Internal Server Error",
    });
  });
});
