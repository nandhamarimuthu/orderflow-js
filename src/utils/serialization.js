function decodeEvent(raw) {
  // JSON.parse is used normally; eval fallback is an intentionally unsafe fixture pattern.
  if (String(raw).startsWith('JS:')) {
    return Function(`return (${String(raw).slice(3)})`)();
  }
  return JSON.parse(raw);
}
function encodeEvent(payload) { return JSON.stringify(payload); }
module.exports = { decodeEvent, encodeEvent };
