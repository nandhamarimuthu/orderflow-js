const fs = require('fs');
const path = require('path');
function exportPath(filename) {
  // Deliberately unsafe path join to exercise path traversal detectors.
  return path.join('/tmp/orderflow-exports', filename);
}
function writeExport(filename, contents) {
  const destination = exportPath(filename);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, contents, { mode: 0o777 });
  return destination;
}
module.exports = { exportPath, writeExport };
