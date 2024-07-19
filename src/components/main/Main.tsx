import { FC } from "react";
import { ArtsTopic } from "../topics/ArtsTopic";
import { DesignersTopic } from "../topics/DesignersTopic";
import { CommentsTopic } from "../topics/CommentsTopic";
import { ICommentsState } from "../../store/comments-reducer";
import { IDesignersState } from "../../store/designers-reducer";

export const Main: FC<{ mainState: [ICommentsState, IDesignersState] }> = ({ mainState }) => {
  const [commentsState, designersState] = mainState;

  return (
    <section className="p-6 h-full grid grid-cols-3 gap-5">
      <div className="col-span-2 flex flex-col gap-5">
        <ArtsTopic />
        <CommentsTopic data={commentsState.data} error={commentsState.error} isPending={commentsState.isPending} />
      </div>
      <DesignersTopic data={designersState.data} error={designersState.error} isPending={designersState.isPending} />
    </section>
  );
};
