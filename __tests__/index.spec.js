import absolute from "../src";

describe("absolute", () => {
  describe("numeric output", () => {
    it("returns a postive number given a positive number", () => {
      expect(absolute(2)).toBe(2);
    });
    it("converts a negative number to a positive number", () => {
      expect(absolute(-2)).toBe(2);
    });
    it("converts a numeric string to a positive number", () => {
      expect(absolute("-1")).toBe(1);
    });
    it("converts falsy values to 0", () => {
      expect(absolute(null)).toBe(0);
      expect(absolute("")).toBe(0);
      expect(absolute([])).toBe(0);
    });
    it("converts a numeric array of length 1 to a number", () => {
      expect(absolute([-2])).toBe(2);
      expect(absolute(["-2"])).toBe(2);
    });
  });
  describe("NaN output", () => {
    it("returns NaN where input is non-numeric", () => {
      expect(absolute([1,2])).toBe(NaN);    
      expect(absolute({})).toBe(NaN);       
      expect(absolute('string')).toBe(NaN); 
      expect(absolute()).toBe(NaN);         
    });
  })
});
