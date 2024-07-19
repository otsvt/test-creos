import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Frames } from "../../types/enums";
import { UiButtonNav } from "../uikits/buttons/UiButtonNav";
import clsx from "clsx";
import { UiDivider } from "../uikits/decore/UiDivider";

interface IAsideProps {
  selectedFrame: Frames;
  changeFrame: (frame: Frames) => void;
}

export const Aside: FC<IAsideProps> = ({ selectedFrame, changeFrame }) => {
  const { t } = useTranslation();

  return (
    <aside
      className={clsx(
        "p-6",
        "w-full max-w-64",
        "flex flex-col gap-4",
        "bg-frameLight dark:bg-frameDark",
        "border-2 border-frameBorder",
        "rounded-s-3xl"
      )}
    >
      <h1 className="font-bold text-3xl ">{t("community")}</h1>
      <UiDivider />
      <nav className="flex flex-col items-start gap-4">
        <UiButtonNav
          type={Frames.Main}
          name={t("main")}
          isSelected={selectedFrame === Frames.Main}
          changeFrame={changeFrame}
        />
        <UiButtonNav
          type={Frames.Dashboard}
          name={t("dashboard")}
          isSelected={selectedFrame === Frames.Dashboard}
          changeFrame={changeFrame}
        />
        <UiButtonNav
          type={Frames.Profiles}
          name={t("profiles")}
          isSelected={selectedFrame === Frames.Profiles}
          changeFrame={changeFrame}
        />
      </nav>
    </aside>
  );
};
