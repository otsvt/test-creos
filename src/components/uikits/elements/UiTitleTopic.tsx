import { FC } from "react";

export const UiTitleTopic: FC<{ text: string }> = ({ text }) => {
  return <h2 className="text-nowrap text-2xl">{text}</h2>;
};
