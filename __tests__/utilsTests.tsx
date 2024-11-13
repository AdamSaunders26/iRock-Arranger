import { structureUpdater } from "@/app/utils";
import "@testing-library/jest-dom";

describe("structureUpdater - ", () => {
  const testObj = {
    a: "prop",
    b: "another prop",
    c: { 1: 1, 2: "num" },
    d: { nest: { nested: "egg" } },
    e: null,
    f: ["a", "r", "r", "a", "y"],
  };

  const modelObj = {
    a: "",
    b: "",
    c: { 1: 0, 2: "", 3: "" },
    d: { nest: { nested: "" } },
    e: null,
    f: [],
    g: "",
  };
  test("returns an object", () => {
    const testResult = structureUpdater(testObj, modelObj);
    expect(typeof testResult).toBe("object");
    expect(testResult).not.toBe(null);
  });
  test("returns a new object", () => {
    const testResult = structureUpdater(testObj, modelObj);
    expect(testResult).not.toBe(testObj);
  });
  test("all existing values should be the same", () => {
    const testResult = structureUpdater(testObj, modelObj);
    function objectComparer(checkerObject: any, object: any) {
      for (const prop in checkerObject) {
        if (
          typeof checkerObject[prop] == "object" &&
          checkerObject[prop] !== null
        ) {
          objectComparer(checkerObject[prop], object[prop]);
        } else {
          if (Object.keys(object).includes(prop)) {
            expect(checkerObject[prop]).toEqual(object[prop]);
          }
        }
      }
    }
    objectComparer(modelObj, testResult);
  });
  test("should add any missing properties and values when comparing objects", () => {
    const testResult = structureUpdater(testObj, modelObj);
    function objectComparer(checkerObject: any, object: any) {
      for (const prop in checkerObject) {
        if (
          typeof checkerObject[prop] == "object" &&
          checkerObject[prop] !== null
        ) {
          objectComparer(checkerObject[prop], object[prop]);
        } else {
          expect(checkerObject[prop]).toEqual(object[prop]);
        }
      }
    }
    console.log(testResult);
    objectComparer(modelObj, testResult);
  });
  // test("should add any missing properties and values when comparing objects", () => {
  //   const testResult = structureUpdater(testObj, modelObj);
  //   function objectComparer(checkerObject: any, object: any) {
  //     for (const prop in checkerObject) {
  //       if (
  //         typeof checkerObject[prop] == "object" &&
  //         checkerObject[prop] !== null
  //       ) {
  //         objectComparer(checkerObject[prop], object[prop]);
  //       } else {
  //         expect(checkerObject[prop]).toEqual(object[prop]);
  //       }
  //     }
  //   }
  //   objectComparer(modelObj, testResult);
  // });
});