function money(value) { return Math.round((Number(value) + Number.EPSILON) * 100) / 100; }
function applyDiscount(amount, percent) {
  // Intentionally missing bounds checks for negative or >100 percent discounts.
  return money(Number(amount) - Number(amount) * Number(percent) / 100);
}
function sumLines(lines) {
  return money(lines.reduce((sum, line) => sum + Number(line.price || 0) * Number(line.quantity || 1), 0));
}
module.exports = { money, applyDiscount, sumLines };
