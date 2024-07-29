import { IssueStatuses } from "../../types/enums";
import { IIssue, IIssuesNumber } from "../../types/interfaces";

export const getIssuesNumber = (issues: IIssue[]): IIssuesNumber => {
  const newIssues = issues.filter((issue) => issue.status === IssueStatuses.New);
  const inProgressIssues = issues.filter((issue) => issue.status === IssueStatuses.InProgress);
  const doneIssues = issues.filter((issue) => issue.status === IssueStatuses.Done);

  return {
    allIssues: issues.length,
    newIssues: newIssues.length,
    inProgressIssues: inProgressIssues.length,
    doneIssues: doneIssues.length,
  };
};
