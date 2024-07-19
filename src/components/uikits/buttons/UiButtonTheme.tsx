import { FC } from "react";
import { useTheme } from "../../../hooks/use-theme";
import { Themes } from "../../../types/enums";
import { SunIcon } from "../../icons/theme/SunIcon";
import { MoonIcon } from "../../icons/theme/MoonIcon";
import clsx from "clsx";

export const UiButtonTheme: FC = () => {
  const [theme, changeTheme] = useTheme();

  return (
    <button
      onClick={changeTheme}
      className={clsx(
        "p-2",
        "flex justify-center items-center",
        "hover:bg-black/10 dark:hover:bg-white/10",
        "rounded-full",
        "transition-colors"
      )}
    >
      {theme === Themes.Dark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
};
