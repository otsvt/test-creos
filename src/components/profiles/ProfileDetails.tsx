import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IDesigner } from "../../types/interfaces";
import { getIssuesNumber } from "../../utils/get/get-issues-number";
import { ProfileDescription } from "./ProfileDescription";
import { UiTitleTopic } from "../uikits/elements/UiTitleTopic";
import { UiDivider } from "../uikits/decore/UiDivider";
import { UiItemIssueDetails } from "../uikits/items/UiItemIssueDetails";

export const ProfileDetails: FC<{ designer: IDesigner }> = ({ designer }) => {
  const { t } = useTranslation();
  const issuesNumber = getIssuesNumber(designer.issues);

  return (
    <div className="h-full w-full flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="shrink-0 rounded-3xl overflow-hidden">
          <img className="h-[350px]" src={designer.avatar} alt="avatar" />
        </div>
        <div className="w-full flex flex-col gap-5">
          <header className="grid gap-2 text-right">
            <UiTitleTopic text={t("profile")} />
            <UiDivider />
          </header>
          <ProfileDescription designer={designer} issuesNumber={issuesNumber} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <header className="grid gap-2">
          <UiTitleTopic text={t("issues")} />
          <UiDivider />
        </header>
        <div className="grid grid-rows-4 grid-cols-2 gap-3">
          {designer.issues.map((issue) => (
            <UiItemIssueDetails key={issue.key} issue={issue} />
          ))}
        </div>
      </div>
    </div>
  );
};
