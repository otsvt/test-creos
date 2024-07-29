import { IIssue } from "../../types/interfaces";

export const getLastIssues = (issues: IIssue[], number: number): IIssue[] => {
  return issues
    .sort((a, b) => new Date(b.date_finished_by_designer!).getTime() - new Date(a.date_finished_by_designer!).getTime())
    .slice(0, number);
};
