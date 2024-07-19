import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useRandomComments } from "../../hooks/use-random-comments";
import { IComment, ITopic } from "../../types/interfaces";
import { renderLoader } from "../../utils/render/render-loader";
import { renderError } from "../../utils/render/render-error";
import { renderComments } from "../../utils/render/render-comments";
import { UiTitleTopic } from "../uikits/elements/UiTitleTopic";
import { UiDivider } from "../uikits/decore/UiDivider";

export const CommentsTopic: FC<ITopic> = ({ data, error, isPending }) => {
  const { t } = useTranslation();
  const randomComments = useRandomComments(data as IComment[]);

  return (
    <div className="h-full flex flex-col gap-4">
      <header className="grid gap-2">
        <UiTitleTopic text={t("latest_topics")} />
        <UiDivider />
      </header>
      <div className="grow">
        {isPending && renderLoader()}
        {error && renderError(error)}
        {data && renderComments(randomComments)}
      </div>
    </div>
  );
};
