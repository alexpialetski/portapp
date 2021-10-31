export const resetDateToStart = (date: number): number =>
  new Date(date).setUTCHours(0, 0, 0, 0);

export const findClosestAndLessDate = (
  date: number,
  dates: number[]
): number => {
  let result = 0;

  for (const currentDate of dates) {
    if (currentDate <= date && currentDate > result) {
      result = currentDate;
    }
  }

  return result;
};

export const getTimestampsFromStart = (
  startDate: number,
  endDate: number
): number[] => {
  const start = resetDateToStart(startDate);
  const now = resetDateToStart(endDate);
  const oneDay = 86400000;
  const result = [start];

  while (result[result.length - 1] < now) {
    result.push(result[result.length - 1] + oneDay);
  }

  return result;
};

export const getDaysBefore = (date: number, number: number): number => {
  const d = new Date(date);
  return d.setDate(d.getDate() - number);
};
