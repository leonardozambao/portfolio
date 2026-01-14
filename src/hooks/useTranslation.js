import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

export default function useTranslation() {
  const { translations } = useContext(LanguageContext);
  return translations;
}
