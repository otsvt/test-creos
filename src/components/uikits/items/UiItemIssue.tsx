import { FC } from "react";
import { IIssue } from "../../../types/interfaces";
import { priceFormatter } from "../../../utils/helpers/price-formatter";
import clsx from "clsx";

export const UiItemIssue: FC<{ issue: IIssue }> = ({ issue }) => {
  return (
    <article
      className={clsx(
        "p-2",
        "grid grid-cols-3 gap-5 place-items-center",
        "rounded-xl",
        "bg-white/5 border-2 border-frameBorder"
      )}
    >
      <div className="text-xs">{issue.date_finished_by_designer}</div>
      <div className="text-sm">{issue.key}</div>
      <div className={clsx(issue.income! > issue.expenses! ? "text-[#0ACF83]" : "text-[#F24E1E]", "font-medium")}>
        {priceFormatter.format(issue.income! - issue.expenses!)}
      </div>
    </article>
  );
};
