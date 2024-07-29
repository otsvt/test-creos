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
  const statuses = [IssueStatuses.New, IssueStatuses.InProgress, IssueStatuses.Done];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const createRandomIssue = (): IIssue => {
  const id = Math.floor(Math.random() * 1000);
  const key = getRandomString(10);
  const date_created = getRandomDate(new Date(2023, 0, 1), new Date());
  const status = getRandomStatus();
  let date_started_by_designer, date_finished_by_designer, income, expenses;

  if (status === IssueStatuses.InProgress) {
    date_started_by_designer = getRandomDate(new Date(date_created), new Date());
  }
  if (status === IssueStatuses.Done) {
    date_started_by_designer = getRandomDate(new Date(date_created), new Date());
    date_finished_by_designer = getRandomDate(new Date(date_started_by_designer), new Date());
    income = Math.ceil(Math.random() * (10000 - 1000) + 1000);
    expenses = Math.ceil(Math.random() * (5000 - 500) + 500);
  }

  return {
    id,
    key,
    date_created,
    date_started_by_designer,
    date_finished_by_designer,
    status,
    income,
    expenses,
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
