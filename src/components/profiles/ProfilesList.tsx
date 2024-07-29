import { FC } from "react";
import { useTranslation } from "react-i18next";
import { IDesigner } from "../../types/interfaces";
import { UiTitleTopic } from "../uikits/elements/UiTitleTopic";
import { UiDivider } from "../uikits/decore/UiDivider";
import { UiItemDesigner } from "../uikits/items/UiItemDesigner";
import { ButtonType } from "../../types/enums";

interface IProfileListProps {
  designers: IDesigner[];
  chooseDesigner: (designer: IDesigner) => void;
}

export const ProfilesList: FC<IProfileListProps> = ({ designers, chooseDesigner }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      <header className="grid gap-2">
        <UiTitleTopic text={t("our_designers")} />
        <UiDivider />
      </header>
      <div className="flex flex-col justify-center gap-4">
        {designers.map((designer) => (
          <UiItemDesigner
            key={designer.id}
            designer={designer}
            button={ButtonType.More}
            chooseDesigner={chooseDesigner}
          />
        ))}
      </div>
    </div>
  );
};
