console.log('File A is loading ...');
exports.done = false;

var b = require('./testB.js');
console.log('in test A done', b.done);
exports.done = true;
console.log('File A is done');