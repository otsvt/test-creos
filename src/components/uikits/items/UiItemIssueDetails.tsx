import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IssueStatuses } from "../../../types/enums";
import { IIssue } from "../../../types/interfaces";
import clsx from "clsx";

export const UiItemIssueDetails: FC<{ issue: IIssue }> = ({ issue }) => {
  const { t } = useTranslation();

  return (
    <article
      className={clsx(
        "p-2",
        "grid grid-cols-3 gap-5 place-items-center",
        "rounded-xl",
        "bg-white/5 border-2 border-frameBorder"
      )}
    >
      <div className="text-sm font-medium">{issue.id}</div>
      <div className="text-sm">{issue.key}</div>
      <div
        className={clsx(
          "font-medium",
          issue.status === IssueStatuses.New && "text-new",
          issue.status === IssueStatuses.InProgress && "text-inProgress",
          issue.status === IssueStatuses.Done && "text-done"
        )}
      >
        {issue.status === IssueStatuses.New && t("new_single")}
        {issue.status === IssueStatuses.Done && t("done_sinle")}
        {issue.status === IssueStatuses.InProgress && t("in_progress_single")}
      </div>
    </article>
  );
};
