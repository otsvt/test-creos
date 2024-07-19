import { UiItemComment } from "../../components/uikits/items/UiItemComment";
import { IComment } from "../../types/interfaces";

export const renderComments = (data: IComment[]) => {
  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 gap-4">
      {data.map((comment, i) => {
        return <UiItemComment key={i} comment={comment} />;
      })}
    </div>
  );
};
