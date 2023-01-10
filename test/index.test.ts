import { test, expect, describe } from "@jest/globals";
import { readBoolean } from "../source/index.js";

describe("non-extended", () => {
  test("true", () => {
    expect(readBoolean("true")).toBe(true);
    expect(readBoolean("True")).toBe(true);
  });
  test("false", () => {
    expect(readBoolean("false")).toBe(false);
    expect(readBoolean("False")).toBe(false);
  });
  test("undefined", () => {
    expect(readBoolean(undefined)).toBe(undefined);
  });
  test("other", () => {
    expect(readBoolean("other")).toBe(undefined);
  });
});

describe("non-extended strict", () => {
  test("true", () => {
    expect(readBoolean("true", { strict: true })).toBe(true);
    expect(readBoolean("True", { strict: true })).toBe(undefined);
  });
  test("false", () => {
    expect(readBoolean("false", { strict: true })).toBe(false);
    expect(readBoolean("False", { strict: true })).toBe(undefined);
  });
  test("undefined", () => {
    expect(readBoolean(undefined, { strict: true })).toBe(undefined);
  });
  test("other", () => {
    expect(readBoolean("other", { strict: true })).toBe(undefined);
  });
});

describe("extended", () => {
  test("true", () => {
    expect(readBoolean("true", { extended: true })).toBe(true);
    expect(readBoolean("T", { extended: true })).toBe(true);
    expect(readBoolean("1", { extended: true })).toBe(true);
    expect(readBoolean("y", { extended: true })).toBe(true);
    expect(readBoolean("YES", { extended: true })).toBe(true);
  });
  test("false", () => {
    expect(readBoolean("False", { extended: true })).toBe(false);
    expect(readBoolean("f", { extended: true })).toBe(false);
    expect(readBoolean("0", { extended: true })).toBe(false);
    expect(readBoolean("n", { extended: true })).toBe(false);
    expect(readBoolean("nO", { extended: true })).toBe(false);
  });
  test("undefined", () => {
    expect(readBoolean(undefined, { extended: true })).toBe(undefined);
  });
  test("other", () => {
    expect(readBoolean("other", { extended: true })).toBe(undefined);
  });
});

describe("extended strict", () => {
  test("true", () => {
    expect(readBoolean("true", { extended: true, strict: true })).toBe(true);
    expect(readBoolean("T", { extended: true, strict: true })).toBe(undefined);
    expect(readBoolean("1", { extended: true, strict: true })).toBe(true);
    expect(readBoolean("y", { extended: true, strict: true })).toBe(true);
    expect(readBoolean("YES", { extended: true, strict: true })).toBe(undefined);
  });
  test("false", () => {
    expect(readBoolean("False", { extended: true, strict: true })).toBe(undefined);
    expect(readBoolean("f", { extended: true, strict: true })).toBe(false);
    expect(readBoolean("0", { extended: true, strict: true })).toBe(false);
    expect(readBoolean("n", { extended: true, strict: true })).toBe(false);
    expect(readBoolean("nO", { extended: true, strict: true })).toBe(undefined);
  });
  test("undefined", () => {
    expect(readBoolean(undefined, { extended: true, strict: true })).toBe(undefined);
  });
  test("other", () => {
    expect(readBoolean("other", { extended: true, strict: true })).toBe(undefined);
  });
});

