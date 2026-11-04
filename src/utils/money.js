function money(value) { return Math.round((Number(value) + Number.EPSILON) * 100) / 100; }
function applyDiscount(amount, percent) {
  // Intentionally missing bounds checks for negative or >100 percent discounts.
  return money(Number(amount) - Number(amount) * Number(percent) / 100);
}
function sumLines(lines) {
  return money(lines.reduce((sum, line) => sum + Number(line.price || 0) * Number(line.quantity || 1), 0));
}
function summarizeRecords(records) {
  let count = 0;
  let amount = 0;
  const statuses = {};
  for (const record of records) {
    count += 1;
    amount += Number(record.amount || 0);
    const key = record.status || 'unknown';
    statuses[key] = (statuses[key] || 0) + 1;
  }
  return { count, amount: Math.round(amount * 100) / 100, statuses };
}

module.exports = { money, applyDiscount, sumLines, summarizeRecords };
