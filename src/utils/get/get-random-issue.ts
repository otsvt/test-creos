import { IssueStatuses } from "../../types/enums";
import { IIssue } from "../../types/interfaces";

const getRandomString = (length: number): string => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const getRandomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split("T")[0];
};

const getRandomStatus = (): IssueStatuses => {
  const statuses = [IssueStatuses.New, IssueStatuses.InProggess, IssueStatuses.Done];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const createRandomIssue = (): IIssue => {
  const id = Math.floor(Math.random() * 1000);
  const key = getRandomString(10);
  const date_created = getRandomDate(new Date(2023, 0, 1), new Date());
  const status = getRandomStatus();
  let date_started_by_designer, date_finished_by_designer;

  if (status === IssueStatuses.InProggess) {
    date_started_by_designer = getRandomDate(new Date(2023, 0, 1), new Date());
  }
  if (status === IssueStatuses.Done) {
    date_started_by_designer = getRandomDate(new Date(2023, 0, 1), new Date());
    date_finished_by_designer = getRandomDate(new Date(2023, 0, 1), new Date());
  }

  return {
    id,
    key,
    date_created,
    date_started_by_designer,
    date_finished_by_designer,
    status,
  };
};

export const getRandomIssues = (): IIssue[] => {
  const issues = [];
  const sumOfRandomIssues = Math.ceil(Math.random() * 10);

  for (let i = 0; i < sumOfRandomIssues; i++) {
    issues.push(createRandomIssue());
  }

  return issues;
};
