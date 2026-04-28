import { describe, it, expect } from "vitest";
import answer from "../lesson-05-terminal-commands/level-10/answer.js";

describe("lesson-05 — level-10 challenge steps array", () => {
  it("exports an array of steps", () => {
    expect(Array.isArray(answer)).toBeTruthy();
  });
  it("includes a node run step (e.g., 'node ./folder/script.js')", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /\bnode\b/i.test(s))).toBeTruthy();
  });

  it("includes a terminal clear step (e.g., 'clear' or 'ctrl+l')", () => {
    const steps = answer.map(String);
    expect(
      steps.some((s) => /\bclear\b|ctrl\+l|control\+l/i.test(s)),
    ).toBeTruthy();
  });

  it("includes a step that returns to the original folder (e.g., 'cd ..' or 'cd -')", () => {
    const steps = answer.map(String);
    expect(
      steps.some((s) => /(\bcd\s+(\.|\.|-|back))|\bcd\s+\.\./i.test(s)),
    ).toBeTruthy();
  });

  it("includes a VS Code explorer step mentioning 'added file'", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /added file/i.test(s))).toBeTruthy();
  });

  it("includes a VS Code explorer step mentioning 'created folder'", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /created folder/i.test(s))).toBeTruthy();
  });

  it("includes a VS Code explorer step mentioning 'moved file'", () => {
    const steps = answer.map(String);
    expect(steps.some((s) => /moved file|moved/i.test(s))).toBeTruthy();
  });
});
