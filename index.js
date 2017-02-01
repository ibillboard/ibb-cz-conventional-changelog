"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('ibb-conventional-commit-types');

module.exports = engine({
  types: conventionalCommitTypes.types
});
