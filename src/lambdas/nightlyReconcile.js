exports.handler = async event => {
  const rows = event.payments || [];
  const discrepancies = rows.filter(row => Number(row.captured) !== Number(row.expected))
    .map(row => ({ paymentId: row.id, delta: Number(row.captured) - Number(row.expected) }));
  return { checked: rows.length, discrepancies };
};
