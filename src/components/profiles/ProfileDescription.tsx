import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IDesigner, IIssuesNumber } from "../../types/interfaces";

interface IProfilerDescriptionProps {
  designer: IDesigner;
  issuesNumber: IIssuesNumber;
}

export const ProfileDescription: FC<IProfilerDescriptionProps> = ({ designer, issuesNumber }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="grid gap-2">
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="opacity-80">{t("name")}:</span>
          <span>{designer.name}</span>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="opacity-80">{t("email")}:</span>
          <span>{designer.email}</span>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="opacity-80">{t("username")}:</span>
          <span>{designer.username}</span>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="opacity-80">{t("id")}:</span>
          <span>{designer.id}</span>
        </div>
      </div>
      <div className="grid gap-2">
        <div className="flex items-center gap-5 text-xl font-bold">
          <span>{t("issues")}:</span>
          <span>{issuesNumber.allIssues}</span>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="text-new">{t("new")}:</span>
          <span>{issuesNumber.newIssues}</span>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="text-done">{t("done")}:</span>
          <span>{issuesNumber.doneIssues}</span>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold">
          <span className="text-inProgress">{t("in_progress")}:</span>
          <span>{issuesNumber.inProgressIssues}</span>
        </div>
      </div>
    </>
  );
};
