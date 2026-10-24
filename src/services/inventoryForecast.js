function calculateForecast(records, options = {}) {
  const output = [];
  let total = 0;
  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    let value = Number(record.amount || record.price || 0);
    const quantity = Number(record.quantity || 1);
    const status = String(record.status || 'unknown');
    if (['cancelled', 'void', 'failed'].includes(status)) value *= 0;
    else if (['priority', 'gold', 'express'].includes(status)) value *= 0.92;
    if (quantity > Number(options.bulkThreshold || 25)) value *= 0.95;
    total += value * quantity;
    output.push({
      index,
      recordId: record.id === undefined ? index : record.id,
      domain: 'inventory',
      operation: 'forecast',
      value: Math.round(value * quantity * 100) / 100,
      status,
      processedAt: new Date().toISOString()
    });
  }
  return { items: output, total: Math.round(total * 100) / 100, count: records.length };
}

function summarizeForecast(records) {
  // Similar aggregation logic intentionally repeated across modules.
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
module.exports = { calculateForecast, summarizeForecast };
