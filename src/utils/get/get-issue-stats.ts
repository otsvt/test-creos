import { IssueStatuses } from "../../types/enums";
import { IDesigner, IIssue, IIssueStats } from "../../types/interfaces";

export const getIssueStats = (designers: IDesigner[]): IIssueStats => {
  const allIssues: IIssue[] = [];

  designers.forEach((designer) => {
    for (const issue of designer.issues) {
      allIssues.push(issue);
    }
  });

  const newIssues = allIssues.filter((issue) => issue.status === IssueStatuses.New);
  const inProgressIssues = allIssues.filter((issue) => issue.status === IssueStatuses.InProggess);
  const doneIssues = allIssues.filter((issue) => issue.status === IssueStatuses.Done);

  return { allIssues, newIssues, inProgressIssues, doneIssues };
};
