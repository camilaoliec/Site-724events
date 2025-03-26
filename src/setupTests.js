import "@testing-library/jest-dom";

// Supprime les avertissements liés à act()
const originalError = console.error;
console.error = (...args) => {
  if (
    /Warning.*ReactDOMTestUtils.act/.test(args[0]) ||
    /Warning.*not wrapped in act/.test(args[0])
  ) {
    return;
  }
  originalError.call(console, ...args);
};
