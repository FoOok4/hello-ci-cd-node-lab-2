const hello = require('./index');
const assert = require('assert');

assert.strictEqual(hello(), "Hello, World!");
console.log("Test passed!");
