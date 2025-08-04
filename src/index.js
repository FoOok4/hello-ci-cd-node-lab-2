function hello() {
  return "Hello, World!";
}

export default hello;

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(hello());
}
