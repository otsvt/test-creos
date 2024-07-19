import { useEffect, useState } from "react";
import { IComment } from "../types/interfaces";
import { CommentNumbers } from "../types/enums";
import { getRandomComments } from "../utils/get/get-random-comments";

export const useRandomComments = (data: IComment[]): IComment[] => {
  const [randomComments, setRandomComments] = useState<IComment[] | []>([]);

  useEffect(() => {
    if (data) {
      const randomComments = getRandomComments(data, CommentNumbers.Visible);
      setRandomComments(randomComments);
    }
  }, [data]);

  return randomComments;
};
