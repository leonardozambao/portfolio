import { createContext, useState } from "react";
import en from "../locales/en";
import pt from "../locales/pt";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  const translations = lang === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}
