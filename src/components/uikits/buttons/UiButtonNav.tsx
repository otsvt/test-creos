import clsx from "clsx";
import { FC } from "react";
import { Frames } from "../../../types/enums";
import { renderFrameIcon } from "../../../utils/render/render-frame-icon";

interface IUiButtonNavProps {
  type: Frames;
  name: string;
  isSelected: boolean;
  changeFrame: (frame: Frames) => void;
}

export const UiButtonNav: FC<IUiButtonNavProps> = ({ type, name, isSelected, changeFrame }) => {
  return (
    <button
      onClick={() => changeFrame(type)}
      className={clsx(
        "p-2",
        "w-full",
        "flex items-center gap-2",
        "font-medium text-lg",
        "rounded-xl shadow-2xl",
        "transition-all",
        "border border-buttonNav dark:border-transparent",
        isSelected
          ? "bg-buttonNav hover:bg-buttonNav/70 text-white"
          : "text-buttonNav dark:text-white/80 hover:bg-buttonNav/10 dark:hover:bg-white/10"
      )}
    >
      {renderFrameIcon(type, isSelected)}
      <span>{name}</span>
    </button>
  );
};
