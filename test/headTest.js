const assert = require('chai').assert;
const head = require('../head');
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });

  it("returns 5 for [5, 6, 7]", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns 25 for ([25, 50, 75], 'testing') which does not equal 25.5", () => {
    assert.notStrictEqual(head([25, 50, 75], "testing"), 25.5);
  });

  it("returns 5 for ([5, 6, 7]), 5)", () => {
    assert.strictEqual(head([5, 6, 7], 5), 5);
  });
});