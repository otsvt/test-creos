import { TOPICS } from "../../data/topics";

export const getRandomTopic = (): { name: string; image: string } => {
  const randomIndex = Math.floor(Math.random() * TOPICS.length);

  return TOPICS[randomIndex];
};
