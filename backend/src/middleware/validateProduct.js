export function validateProduct(req, res, next) {
  const { productName, price, description } = req.body;

  if (!productName) {
    return res.status(400).json({ message: "ProductName is required!" });
  }
  if (!price) {
    return res.status(400).json({ message: "Price is required!" });
  }
  if (typeof description !== "string") {
    return res.status(400).json({ message: "Description has to be a text" });
  }
  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ message: "Price has to be number >= 0" });
  }

  next();
}
