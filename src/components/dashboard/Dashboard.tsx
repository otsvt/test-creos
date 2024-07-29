import { FC } from "react";
import { IDesigner, IIssueStats } from "../../types/interfaces";
import { getIssueStats } from "../../utils/get/get-issue-stats";
import { renderError } from "../../utils/render/render-error";
import { ChartBar } from "./ChartBar";
import { ChartPie } from "./ChartPie";

export const Dashboard: FC<{ designers: IDesigner[] | null }> = ({ designers }) => {
  const issueStats: IIssueStats | null = designers ? getIssueStats(designers) : null;

  return (
    <section className="h-full p-6">
      {issueStats ? (
        <div className="h-full grid grid-rows-2 gap-5">
          <ChartBar issueStats={issueStats} />
          <ChartPie issueStats={issueStats} />
        </div>
      ) : (
        renderError("Please update the page")
      )}
    </section>
  );
};
