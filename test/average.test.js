import test from "node:test";
import assert from "node:assert/strict";
import { addNumber, resetAverage } from "../src/services/averageService.js";

test.beforeEach(() => {
  resetAverage();
});

test("should calculate the average of multiple numbers", () => {
  assert.equal(addNumber(10), 10);
  assert.equal(addNumber(20), 15);
  assert.equal(addNumber(30), 20);
});

test("should calculate the average correctly for decimal numbers", () => {
  assert.equal(addNumber(10.5), 10.5);
});

test("should handle negative numbers", () => {
  assert.equal(addNumber(-5), -5);
});