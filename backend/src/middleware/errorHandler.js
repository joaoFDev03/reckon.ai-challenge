export function errorHandler(err, req, res, next) {
  console.error("ERROR:", err);

  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.errors,
    });
  }
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Invalid ID format"
    });
  }

  res.status(500).json({
    message: "Internal Server Error",
  });
}
