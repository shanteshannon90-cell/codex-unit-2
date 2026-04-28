import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-09/answer.js";

describe("lesson-05 — level-09 multi-step steps array", () => {
  it("exports an array of steps (strings)", () => {
    expect(Array.isArray(answer)).toBeTruthy();
  });
  it("includes 'ls' at least once (case-insensitive)", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /\bls\b/i.test(s))).toBeTruthy();
  });

  it("includes 'cd' at least once (case-insensitive)", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /\bcd\b/i.test(s))).toBeTruthy();
  });

  it("includes 'node' at least once (case-insensitive)", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /\bnode\b/i.test(s))).toBeTruthy();
  });
});
