import { FC } from "react";
import { arts } from "../../data/arts";
import { UiItemArt } from "../uikits/items/UiItemArt";

export const ArtsTopic: FC = () => {
  return (
    <div className="grid grid-cols-3 gap-5">
      {arts.map((art, i) => {
        return <UiItemArt key={i} art={art} />;
      })}
    </div>
  );
};
