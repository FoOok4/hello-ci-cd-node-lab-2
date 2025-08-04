import assert from 'assert';
import hello from '../src/index.js'; // test source, not dist

assert.strictEqual(hello(), "Hello, World!");
console.log("✅ Test passed!");
