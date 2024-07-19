import { IComment } from "../../types/interfaces";

export const getRandomComments = (comments: IComment[], times: number): IComment[] => {
  const randomComments = [];

  for (let i = 0; i < times; i++) {
    const randomIndex = Math.floor(Math.random() * comments.length);
    randomComments.push(comments[randomIndex]);
  }

  return randomComments;
};
