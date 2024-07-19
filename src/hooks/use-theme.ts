import { useEffect, useState } from "react";
import { Themes } from "../types/enums";

export const useTheme = (): [Themes, () => void] => {
  const [theme, setTheme] = useState<Themes>(Themes.Dark);

  useEffect(() => {
    theme === Themes.Dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    return () => document.documentElement.classList.remove("dark");
  }, [theme]);

  const changeTheme = () => {
    setTheme((prev) => (prev === Themes.Light ? Themes.Dark : Themes.Light));
  };

  return [theme, changeTheme];
};
