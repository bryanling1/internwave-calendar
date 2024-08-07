import { describe, test, expect } from "vitest"
import { getCalendarIconColor } from "../getCalendarIconColor";
import { Color } from "../../../../../../styles/Color";

describe('getCalendarIconColor', () => {

  test("No start date or end date returns undefined", () => {
    expect(getCalendarIconColor()).toBeUndefined();
  })

  describe('Start date only', () => {
    test("Start date is in the past", () => {
      expect(getCalendarIconColor(1)).toBe(Color.Green);
    })

    test("Start date is in 1 day", () => {
      expect(getCalendarIconColor(Date.now() + 86400000 - 1)).toBe(Color.Yellow);
    })

    test("Start date is tomorrow", () => {
      expect(getCalendarIconColor(Date.now() + 86400000 * 2)).toBeUndefined();
    })
  })

  describe('Start and end date', () => {
    test("Current date is between start and end date", () => {
      expect(getCalendarIconColor(Date.now() - 86400000, Date.now() + 86400000)).toBe(Color.Green);
    })

    test("Current date is 1 day before start date", () => {
      expect(getCalendarIconColor(Date.now() + 86400000 - 1, Date.now() + 86400000 - 1)).toBe(Color.Yellow);
    })

    test("Current date is after end date", () => {
      expect(getCalendarIconColor(Date.now() - 86400000, Date.now() - 86400000)).toBe(Color.Red);
    })

    test("Current date is 2 days before start date", () => {
        expect(getCalendarIconColor(Date.now() + 86400000 * 2, Date.now() + 86400000* 2)).toBeUndefined();
    })
  })

  describe('End date only', () => {
    test("Current date is after end date", () => {
      expect(getCalendarIconColor(undefined, Date.now() - 86400000)).toBe(Color.Red);
    })

    test("Current date is 1 day before end date", () => {
      expect(getCalendarIconColor(undefined, Date.now() + 86400000 - 1)).toBe(Color.Yellow);
    })

    test("Current date is the end date", () => {
      expect(getCalendarIconColor(undefined, Date.now())).toBe(Color.Green);
    })

    test("Current date is 2 days before end date", () => {
      expect(getCalendarIconColor(undefined, Date.now() + 86400000 * 2)).toBeUndefined();
    })
  })
});