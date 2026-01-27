module.exports = (req, res, next) => {
  const { name, price, category, description, stock } = req.body;
  const errors = [];

  if (!name || typeof name !== "string" || name.length < 2) errors.push("Name required, min 2 chars");
  if (price === undefined || typeof price !== "number" || price <= 0) errors.push("Price required > 0");
  if (!["Electronics", "Clothes", "Food"].includes(category)) errors.push("Category must be Electronics, Clothes, or Food");
  if (description && description.length > 200) errors.push("Description max 200 chars");
  if (stock === undefined || !Number.isInteger(stock) || stock < 0) errors.push("Stock must be integer ≥ 0");

  if (errors.length) return res.status(400).json({ success: false, errors });
  next();
};
