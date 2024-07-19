import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IArt } from "../../../types/interfaces";
import clsx from "clsx";

export const UiItemArt: FC<{ art: IArt }> = ({ art }) => {
  const { t } = useTranslation();

  return (
    <article
      className={clsx(
        "p-2",
        "flex flex-col items-center gap-3",
        "rounded-xl",
        "shadow-2xl shadow-bgLight dark:shadow-black",
        "bg-white/5 border-2 border-frameBorder",
        "hover:scale-105 transition-transform"
      )}
    >
      <div className="rounded-xl shadow-2xl overflow-hidden">
        <img src={art.image} alt="art" />
      </div>
      <div className="hidden xl:flex w-full justify-between items-center">
        <div className="grid">
          <h3 className="text-sm font-bold">{art.title}</h3>
          <span className="text-xs opacity-50">{art.author_username}</span>
        </div>
        <div className={clsx("rounded-full  shadow-2xl", "overflow-hidden", "border border-frameBorder")}>
          <img className="w-10 h-10" src={art.author_avatar} alt="avatar" />
        </div>
      </div>
      <div className="hidden xl:block self-end font-medium text-xs opacity-80">
        <i>{t("published")}</i>
        <span> {art.date}</span>
      </div>
    </article>
  );
};
