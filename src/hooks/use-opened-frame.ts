import { useState } from "react";
import { Frames } from "../types/enums";

export const useOpenedFrame = (): [Frames, (frame: Frames) => void] => {
  const [openedFrame, setOpenedFrame] = useState(Frames.Main);

  const changeFrame = (frame: Frames) => {
    setOpenedFrame(frame);
  };

  return [openedFrame, changeFrame];
};
