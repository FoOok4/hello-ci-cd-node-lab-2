"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function hello() {
  return "Hello, World!";
}
var _default = exports["default"] = hello;
if (import.meta.url === "file://".concat(process.argv[1])) {
  console.log(hello());
}