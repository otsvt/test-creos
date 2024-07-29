import { IssueStatuses } from "./enums";

export interface IIconProps {
  className: string;
}

export interface IIssue {
  id: number;
  key: string;
  date_created: string;
  date_started_by_designer?: string;
  date_finished_by_designer?: string;
  status: IssueStatuses;
  income?: number;
  expenses?: number;
}

export interface IIssueStats {
  allIssues: IIssue[];
  newIssues: IIssue[];
  inProgressIssues: IIssue[];
  doneIssues: IIssue[];
}

export interface IDesigner {
  id: number;
  avatar: string;
  username: string;
  name: string;
  email: string;
  issues: IIssue[];
  isFollowing: boolean;
}

export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
  topic_name: string;
  topic_image: string;
}

export interface IArt {
  image: string;
  author_avatar: string;
  author_name: string;
  author_username: string;
  date: string;
  title: string;
}

export interface ITopic {
  data: IComment[] | IDesigner[] | null;
  error: string | null;
  isPending: boolean;
}

export interface IIssuesNumber {
  allIssues: number;
  newIssues: number;
  inProgressIssues: number;
  doneIssues: number;
}
