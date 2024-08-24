import { describe, test, expect } from "vitest"
import { Color } from "../../../../../../styles/Color";
import { getStartEndTextColor } from "../getStartEndTextColor";

describe('getStartEndTextColor', () => {

  describe("Past the start and end date", () => {
    test("Both are red", () => {
        expect(getStartEndTextColor(Date.now() - 86400000, Date.now() - 86400000)).toEqual({
            startColor: Color.Red,
            endColor: Color.Red
        })
    })
  })

  describe("In between start and end date", () => {
    test("End date is more than 1 day away", () => {
        expect(getStartEndTextColor(Date.now() - 86400000, Date.now() + 86400000 + 1000)).toEqual({
            startColor: Color.Green,
            endColor: undefined
        })
    })
    test("End day is within 1 day away", () => {
        expect(getStartEndTextColor(Date.now() - 86400000, Date.now() + 86400000 - 1000)).toEqual({
            startColor: Color.Green,
            endColor: Color.Yellow
        })
    })

    test("End date is now", () => {
        expect(getStartEndTextColor(Date.now() - 86400000, Date.now() + 1000)).toEqual({
            startColor: Color.Green,
            endColor: Color.Green
        })
    })
  })

  describe("Before start date", () => {
    test("End color is undefined", () => {
        expect(getStartEndTextColor(Date.now() + 86400000, Date.now() + 86400000 + 1)).toEqual({
            startColor: undefined,
            endColor: undefined
        })
    })
  })

});