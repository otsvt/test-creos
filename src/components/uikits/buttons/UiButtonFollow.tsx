import clsx from "clsx";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { toggleFollowing } from "../../../store/designers-reducer";

export const UiButtonFollow: FC<{ isFollowing: boolean; id: number }> = ({ isFollowing, id }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(toggleFollowing(id))}
      className={clsx(
        "shrink-0",
        "py-2 px-4 w-28",
        "flex justify-center items-center",
        "font-medium text-sm",
        "rounded-xl shadow-2xl",
        "transition-all",
        "border border-buttonNav",
        isFollowing ? "bg-transparent" : "bg-buttonNav",
        isFollowing ? "text-buttonNav dark:text-white" : "text-white",
        isFollowing ? "hover:bg-buttonNav/5 dark:hover:bg-white/10" : "hover:bg-buttonNav/70"
      )}
    >
      {isFollowing ? t("following") : t("follow")}
    </button>
  );
};
