import { FC } from "react";
import { IDesigner, IIssueStats } from "../../types/interfaces";
import { getIssueStats } from "../../utils/get/get-issue-stats";

export const Dashboard: FC<{ designers: IDesigner[] | null }> = ({ designers }) => {
  const issueStats: IIssueStats | [] = designers ? getIssueStats(designers) : [];

  console.log(issueStats);

  return <section className="p-6"></section>;
};
