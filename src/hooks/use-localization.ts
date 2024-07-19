import { useState } from "react";
import { Languages } from "../types/enums";
import { useTranslation } from "react-i18next";

export const useLocalization = (): [Languages, () => void] => {
  const [language, setLanguage] = useState<Languages>(Languages.Eng);

  const { i18n } = useTranslation();
  const newLanguage = language === Languages.Eng ? "ru" : "en";

  const changeLanguage = () => {
    setLanguage((prev) => (prev === Languages.Eng ? Languages.Ru : Languages.Eng));
    i18n.changeLanguage(newLanguage);
  };

  return [language, changeLanguage];
};
