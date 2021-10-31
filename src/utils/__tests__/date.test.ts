import {
  findClosestAndLessDate,
  resetDateToStart,
  getTimestampsFromStart,
} from "../date";

describe("date", () => {
  beforeAll(() => {
    jest
      .useFakeTimers("modern")
      .setSystemTime(new Date("2020-01-10").getTime());
  });

  test.each([
    [1, [1, 2, 3], 1],
    [2, [3, 2, 1], 2],
    [3, [2, 5, 1, 4, 1], 2],
  ])("findClosestAndLessDate", (date, dates, expected) => {
    expect(findClosestAndLessDate(date, dates)).toBe(expected);
  });

  test.each([
    [
      new Date("December 17, 1995 03:24:00"),
      new Date("December 17, 1995 03:00:00"),
    ],
    [
      new Date("December 17, 1995 01:24:00"),
      new Date("December 16, 1995 03:00:00"),
    ],
  ])("resetDateToStart", (date, expected) => {
    expect(resetDateToStart(date.getTime())).toBe(expected.getTime());
  });

  test("getTimestampsFromStart", () => {
    expect(
      getTimestampsFromStart(
        new Date("2020-01-01").getTime(),
        new Date("2020-01-10").getTime()
      ).length
    ).toBe(10);
  });
});
