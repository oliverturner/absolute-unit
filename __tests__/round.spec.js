import { round } from "../src";

describe("round", () => {
  it("corrects for JS's floating point calculation nonsense", () => {
    expect(round(1234.5678, 1)).toBe(1234.6);
    expect(round(1234.5678, -1)).toBe(1230);
    expect(round(1234.5678, 2)).toBe(1234.57);
    expect(round(1.005, 2)).toBe(1.01);
  });
  it("handles numeric strings", () => {
    const pie = "3.14159265359";
    const unit = round(pie, 2);
    expect(unit).toBe(3.14)
  })
});
