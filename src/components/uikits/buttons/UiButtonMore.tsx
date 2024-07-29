import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IDesigner } from "../../../types/interfaces";
import clsx from "clsx";

interface UiButtonMoreProps {
  onClick: (designer: IDesigner) => void;
  designer: IDesigner;
}

export const UiButtonMore: FC<UiButtonMoreProps> = ({ onClick, designer }) => {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => onClick(designer)}
      className={clsx(
        "shrink-0",
        "py-2 px-4 w-28",
        "flex justify-center items-center",
        "font-medium text-sm",
        "rounded-xl shadow-2xl",
        "transition-all",
        "border border-buttonNav",
        "text-buttonNav dark:text-white",
        "hover:bg-buttonNav/5 dark:hover:bg-white/10"
      )}
    >
      {t("more")}
    </button>
  );
};
