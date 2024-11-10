import { structureUpdater } from "@/app/utils";
import "@testing-library/jest-dom";

describe("structureUpdater - ", () => {
  test("returns an object", () => {
    const testObj = {
      a: "prop",
      b: "another prop",
      c: { 1: 1, 2: "num" },
      d: { nest: { nested: "egg" } },
    };
    const testResult = structureUpdater(testObj);
    expect(typeof testResult).toBe("object");
    expect(testResult).not.toBe(null);
  });
  test("returns a new object", () => {
    const testObj = {
      a: "prop",
      b: "another prop",
      c: { 1: 1, 2: "num" },
      d: { nest: { nested: "egg" } },
    };
    const testResult = structureUpdater(testObj);
    expect(testResult).not.toBe(testObj);
  });
  test("all existing values should be the same", () => {
    const testObj = {
      a: "prop",
      b: "another prop",
      c: { 1: 1, 2: "num" },
      d: { nest: { nested: "egg" } },
      e: null,
      f: ["a", "r", "r", "a", "y"],
    };

    const testResult = structureUpdater(testObj);
    function objectComparer(object: any, checkerObject: any) {
      for (const prop in object) {
        if (typeof object[prop] == "object" && object[prop] !== null) {
          objectComparer(object[prop], checkerObject[prop]);
        } else {
          expect(object[prop]).toEqual(checkerObject[prop]);
        }
      }
    }
    objectComparer(testResult, testObj);
  });
});
