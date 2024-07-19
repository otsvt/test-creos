import { FC } from "react";
import { IDesigner } from "../../../types/interfaces";
import { UiButtonFollow } from "../buttons/UiButtonFollow";

export const UiItemDesigner: FC<{ designer: IDesigner }> = ({ designer }) => {
  return (
    <article className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-2">
        <div className="shrink-0 rounded-full shadow-2xl overflow-hidden border border-frameBorder">
          <img className="w-12 h-12" src={designer.avatar} alt="img" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="font-bold text-nowrap text-sm truncate">{designer.name}</span>
          <span className="font-medium text-xs opacity-80">{designer.username}</span>
        </div>
      </div>
      <UiButtonFollow isFollowing={designer.isFollowing} id={designer.id} />
    </article>
  );
};
