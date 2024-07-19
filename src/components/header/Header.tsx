import { FC } from "react";
import { useTranslation } from "react-i18next";
import { getWorkWeek } from "../../utils/get/get-work-week";
import { UiButtonTheme } from "../uikits/buttons/UiButtonTheme";
import { UiButtonLanguage } from "../uikits/buttons/UiButtonLanguage";
import clsx from "clsx";

export const Header: FC = () => {
  const { t } = useTranslation();
  const workWeek = getWorkWeek();

  return (
    <header
      className={clsx(
        "py-6",
        "*:max-w-screen-2xl *:mx-auto *:px-6",
        "bg-frameLight dark:bg-frameDark",
        "border-b-2 border-b-frameBorder",
        "transition-colors"
      )}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">
          {t("work_week")} {workWeek}
        </h2>
        <div className="flex gap-5">
          <UiButtonTheme />
          <UiButtonLanguage />
        </div>
      </div>
    </header>
  );
};
