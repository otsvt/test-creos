import { UiItemDesigner } from "../../components/uikits/items/UiItemDesigner";
import { IDesigner } from "../../types/interfaces";

export const renderDesigners = (data: IDesigner[]) => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {data.map((designer, i) => {
        return <UiItemDesigner key={i} designer={designer} />;
      })}
    </div>
  );
};
