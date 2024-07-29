import { IIssue } from "../../types/interfaces";

export const getFinance = (issues: IIssue[]): number[] => {
  const revenue = issues.reduce((acc, curr) => acc + curr.income!, 0);
  const expenses = issues.reduce((acc, curr) => acc + curr.expenses!, 0);
  const profit = revenue - expenses;

  return [expenses, revenue, profit];
};
