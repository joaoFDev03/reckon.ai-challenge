import { ProductService } from "../../../src/services/product.service.js";
import { describe, expect, jest } from "@jest/globals";

describe("ProductService", () => {
  let service;
  let repoMock;

  beforeEach(() => {
    repoMock = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByName: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    service = new ProductService(repoMock);
  });
  describe("getProducts", () => {
    it("Returns all products", async () => {
      const products = [
        { id: "1", productName: "A", description: "A", price: 3 },
        { id: "2", productName: "B", description: "B", price: 2 },
      ];

      repoMock.findAll.mockResolvedValue(products);

      const result = await service.getProducts();

      expect(repoMock.findAll).toHaveBeenCalled();
      expect(result).toEqual(products);
    });
  });
  describe("getProductById", () => {
    it("Must return the product when it exists", async () => {
      const product = { id: "2", productName: "B", description: "B", price: 2 };
      repoMock.findById.mockResolvedValue(product);

      const result = await service.getProductById("2");
      expect(result).toEqual(product);
      expect(repoMock.findById).toHaveBeenCalledWith("2");
    });

    it("Must throw error if it does not exist", async () => {
      repoMock.findById.mockResolvedValue(null);

      await expect(service.getProductById("1")).rejects.toThrow(
        "Product not found"
      );
    });
  });

  describe("createProduct", () => {
    it("Successfully creates a product", async () => {
      const dto = { productName: "New", price: 10 };
      repoMock.create.mockResolvedValue(dto);

      const result = await service.createProduct(dto);

      expect(result).toEqual(dto);
      expect(repoMock.create).toHaveBeenCalledWith(dto);
    });
    it("Must throw error if it exists", async () => {
      repoMock.findByName.mockResolvedValue({ id: "123", productName: "Test" });

      const input = { productName: "Test", price: 10 };

      await expect(service.createProduct(input)).rejects.toThrow(
        "Product already exists"
      );
    });
  });

  describe("updateProduct", () => {
    it("Must return the update", async () => {
      const updated = { productName: "Updated" };
      repoMock.update.mockResolvedValue(updated);

      const result = await service.updateProduct("123", updated);
      expect(result).toEqual(updated);
      expect(repoMock.update).toHaveBeenCalledWith("123", updated);
    });

    it("Must throw error if it does not exist", async () => {
      repoMock.update.mockResolvedValue(null);

      await expect(service.updateProduct("123", {})).rejects.toThrow(
        "Product not found"
      );
    });
  });

  describe("deleteProduct", () => {
    it("Must delete", async () => {
      const deleted = { id: "1" };
      repoMock.delete.mockResolvedValue(deleted);

      const result = await service.deleteProduct("1");

      expect(result).toEqual(deleted);
      expect(repoMock.delete).toHaveBeenCalledWith("1");
    });

    it("Must throw error if it does not exist", async () => {
      repoMock.delete.mockResolvedValue(null);

      await expect(service.deleteProduct("1")).rejects.toThrow(
        "Product not found"
      );
    });
  });
});
