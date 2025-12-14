import { describe, it, expect } from "vitest";
import {
  validateTitle,
  validateDueDate,
  validateStatus,
  formatDate,
} from "./helpers";

describe("Validation", () => {
  it("returns true for valid title", () => {
    expect(validateTitle("Task")).toBe(true);
  });

  it("returns false for empty title", () => {
    expect(validateTitle("   ")).toBe(false);
  });

  it("validates due date", () => {
    expect(validateDueDate("2025-01-01")).toBe(true);
    expect(validateDueDate("")).toBe(false);
  });

  it("validates status", () => {
    expect(validateStatus("to do")).toBe(true);
    expect(validateStatus("done")).toBe(true);
    expect(validateStatus("invalid")).toBe(false);
  });

  it("formats date correctly", () => {
    expect(formatDate("2025-01-01")).toBe("Jan 1, 2025");
  });
});
