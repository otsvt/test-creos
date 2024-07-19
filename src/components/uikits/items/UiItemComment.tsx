import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IComment } from "../../../types/interfaces";
import clsx from "clsx";

export const UiItemComment: FC<{ comment: IComment }> = ({ comment }) => {
  const { t } = useTranslation();

  return (
    <article
      className={clsx(
        "p-2",
        "flex flex-col gap-3",
        "rounded-xl",
        "shadow-2xl shadow-bgLight dark:shadow-black",
        "bg-white/5 border-2 border-frameBorder",
        "hover:scale-105 transition-transform"
      )}
    >
      <header className="flex justify-between items-center">
        <span className="font-bold text-lg">#{t(`${comment.topic_name}`)}</span>
        <div className={clsx("p-2", "flex justify-center items-center", "bg-bgLight dark:bg-bgDark", "rounded-full")}>
          <img className="w-6 h-6" src={comment.topic_image} alt="topic" />
        </div>
      </header>
      <div className="overflow-hidden font-medium text-lg">
        <p className="truncate">{comment.name}</p>
      </div>
      <i className="text-xs pacity-80">{comment.email}</i>
    </article>
  );
};
