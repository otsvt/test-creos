import { FC } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useTranslation } from "react-i18next";
import { useChartBar } from "../../hooks/use-chart-bar";
import { IIssueStats } from "../../types/interfaces";
import { getFinance } from "../../utils/get/get-finance";
import { priceFormatter } from "../../utils/helpers/price-formatter";
import { UiTitleTopic } from "../uikits/elements/UiTitleTopic";
import { UiDivider } from "../uikits/decore/UiDivider";

Chart.register(CategoryScale, ChartDataLabels);

export const ChartBar: FC<{ issueStats: IIssueStats }> = ({ issueStats }) => {
  const { t } = useTranslation();

  const finance: number[] = getFinance(issueStats.doneIssues);
  const mainLabel = t("finance");
  const optionlabels = [t("expenses"), t("revenue"), t("profit")];

  const [chartData, chartOptions] = useChartBar(finance, mainLabel, optionlabels);

  return (
    <div className="flex gap-5">
      <Bar data={chartData} options={chartOptions} plugins={[ChartDataLabels]} />
      <div className="w-full flex flex-col gap-5">
        <header className="grid gap-2">
          <UiTitleTopic text={mainLabel} />
          <UiDivider />
        </header>
        <div className="h-full flex flex-col gap-5">
          <div className="flex items-center justify-between text-xl font-medium">
            <span>{t("community_expenses")}:</span>
            <div className="text-[#F24E1E]">{priceFormatter.format(finance[0])}</div>
          </div>
          <div className="flex items-center justify-between text-xl font-medium">
            <span>{t("community_revenue")}:</span>
            <div className="text-[#29A0DC]">{priceFormatter.format(finance[1])}</div>
          </div>
          <div className="flex items-center justify-between text-3xl font-medium">
            <span>{t("total_profit")}:</span>
            <div className="text-[#0ACF83]">{priceFormatter.format(finance[2])}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
