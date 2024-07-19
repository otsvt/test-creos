import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { getComments, ICommentsState } from "../store/comments-reducer";
import { getDesigners, IDesignersState } from "../store/designers-reducer";

export const useFetchData = (): [ICommentsState, IDesignersState] => {
  const dispatch: AppDispatch = useDispatch();
  const commentsState = useSelector((state: RootState) => state.comments);
  const designersState = useSelector((state: RootState) => state.designers);

  useEffect(() => {
    dispatch(getComments());
    dispatch(getDesigners());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [commentsState, designersState];
};
