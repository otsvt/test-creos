import { FC } from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useTranslation } from "react-i18next";
import { IIssueStats } from "../../types/interfaces";
import { useChartPie } from "../../hooks/use-chart-pie";
import { getLastIssues } from "../../utils/get/get-last-issues";
import { UiTitleTopic } from "../uikits/elements/UiTitleTopic";
import { UiDivider } from "../uikits/decore/UiDivider";
import { UiItemIssue } from "../uikits/items/UiItemIssue";

Chart.register(CategoryScale);

export const ChartPie: FC<{ issueStats: IIssueStats }> = ({ issueStats }) => {
  const { t } = useTranslation();

  const issuesNumber: number[] = [
    issueStats.newIssues.length,
    issueStats.doneIssues.length,
    issueStats.inProgressIssues.length,
  ];
  const mainLabel = t("issues");
  const optionLabels = [t("new"), t("done"), t("in_progress")];

  const [chartData, chartOptions] = useChartPie(issuesNumber, mainLabel, optionLabels);

  const lastIssues = getLastIssues(issueStats.doneIssues, 7);

  return (
    <div className="flex gap-5">
      <div className="w-full flex flex-col gap-5">
        <header className="grid gap-2">
          <UiTitleTopic text={t("issues")} />
          <UiDivider />
        </header>
        <div className="h-full flex justify-between gap-10">
          <div className="w-full grid grid-rows-4 grid-cols-2 gap-5">
            <div className="place-self-center text-lg font-medium">{t("last_updates")}</div>
            {lastIssues.map((issue) => (
              <UiItemIssue key={issue.key} issue={issue} />
            ))}
          </div>
          <div className="shrink-0 w-1/4 flex flex-col gap-2">
            <div className="flex items-center justify-between text-xl font-medium">
              <span>{t("new")}:</span>
              <div className="text-new">{issueStats.newIssues.length}</div>
            </div>
            <div className="flex items-center justify-between text-xl font-medium">
              <span>{t("done")}:</span>
              <div className="text-done">{issueStats.doneIssues.length}</div>
            </div>
            <div className="flex items-center justify-between text-xl font-medium">
              <span>{t("in_progress")}:</span>
              <div className="text-inProgress">{issueStats.inProgressIssues.length}</div>
            </div>
            <div className="mt-5 flex items-center justify-between text-3xl font-medium">
              <span>{t("all")}:</span>
              <div>{issueStats.allIssues.length}</div>
            </div>
          </div>
        </div>
      </div>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};
