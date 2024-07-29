import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IDesigner, ITopic } from "../../types/interfaces";
import { renderLoader } from "../../utils/render/render-loader";
import { renderError } from "../../utils/render/render-error";
import { renderDesigners } from "../../utils/render/render-designers";
import { UiTitleTopic } from "../uikits/elements/UiTitleTopic";
import { UiDivider } from "../uikits/decore/UiDivider";

export const DesignersTopic: FC<ITopic> = ({ data, error, isPending }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col justify-between gap-2">
      <header className="grid gap-2">
        <UiTitleTopic text={t("our_designers")} />
        <UiDivider />
      </header>
      {isPending && renderLoader()}
      {error && renderError(error)}
      {data && renderDesigners(data as IDesigner[])}
    </div>
  );
};
