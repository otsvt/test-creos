import { addHours, startOfISOWeek, differenceInCalendarWeeks } from "date-fns";

export const getWorkWeek = (): number => {
  const date = new Date();

  const shiftedDate = addHours(date, -11);
  const startOfYear = startOfISOWeek(new Date(shiftedDate.getFullYear(), 0, 1));
  const calendarWeekNumber = differenceInCalendarWeeks(shiftedDate, startOfYear) + 1;

  return calendarWeekNumber;
};
