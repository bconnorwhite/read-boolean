import { test, expect } from "@jest/globals";
import { readBoolean } from "../source";

test("true", () => {
  expect(readBoolean("true")).toBe(true);
});

test("false", () => {
  expect(readBoolean("false")).toBe(false);
});

test("undefined", () => {
  expect(readBoolean(undefined)).toBe(undefined);
});

test("other", () => {
  expect(readBoolean("other")).toBe(undefined);
});
