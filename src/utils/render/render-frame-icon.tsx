import { Frames } from "../../types/enums";
import { MainIcon } from "../../components/icons/aside/MainIcon";
import { DashboardIcon } from "../../components/icons/aside/DashboardIcon";
import { ProfilesIcon } from "../../components/icons/aside/PrifilesIcon";
import clsx from "clsx";

export const renderFrameIcon = (type: Frames, isSelected: boolean) => {
  const RenderIcon =
    {
      [Frames.Main]: MainIcon,
      [Frames.Dashboard]: DashboardIcon,
      [Frames.Profiles]: ProfilesIcon,
    }[type] ?? MainIcon;

  return <RenderIcon className={clsx("w-5 h-5", isSelected ? "text-white" : "text-buttonNav")} />;
};
