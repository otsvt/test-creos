import { FC } from "react";
import { useLocalization } from "../../../hooks/use-localization";
import { Languages } from "../../../types/enums";
import { UsFlagIcon } from "../../icons/language/UsFlagIcon";
import { RuFlagIcon } from "../../icons/language/RuFlagIcon";
import { LanguageIcon } from "../../icons/language/LanguageIcon";
import clsx from "clsx";

export const UiButtonLanguage: FC = () => {
  const [language, changeLanguage] = useLocalization();

  return (
    <button
      onClick={changeLanguage}
      className={clsx(
        "p-2",
        "flex justify-center items-center gap-2",
        "bg-black/5 dark:bg-transparent",
        "hover:bg-black/10 dark:hover:bg-white/10",
        "rounded-full",
        "transition-colors"
      )}
    >
      <LanguageIcon className="w-6 h-6 stroke-black dark:stroke-white" />
      <FlagIcons language={language} />
    </button>
  );
};

const FlagIcons: FC<{ language: Languages }> = ({ language }) => {
  return (
    <div className="relative">
      <FlagIcon isCurrent={language === Languages.Eng} Icon={UsFlagIcon} />
      <FlagIcon isCurrent={language === Languages.Ru} Icon={RuFlagIcon} />
    </div>
  );
};

const FlagIcon: FC<{ isCurrent: boolean; Icon: FC<{ className: string }> }> = ({ isCurrent, Icon }) => {
  return <Icon className={isCurrent ? "relative z-10 w-6 h-6" : "absolute bottom-0 -right-1 w-4 h-4"} />;
};
