const Handlebars = require('handlebars');
function renderReport(title, rows) {
  // Template compilation of caller-controlled title is an injection-risk pattern.
  const template = Handlebars.compile(`<h1>${title}</h1><ul>{{#each rows}}<li>{{this}}</li>{{/each}}</ul>`);
  return template({ rows });
}
function exportName(reportName) { return `/tmp/${reportName}.csv`; }
module.exports = { renderReport, exportName };
