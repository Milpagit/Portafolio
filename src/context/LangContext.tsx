"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import {
  translations,
  type Locale,
  type Translations,
} from "@/lib/translations";

const LangContext = createContext<Translations>(translations.es);

export function LangProvider({ children }: { children: ReactNode }) {
  const [t, setT] = useState<Translations>(translations.es);

  useEffect(() => {
    const lang = navigator.language.split("-")[0] as Locale;
    const resolved: Locale = lang in translations ? lang : "es";
    setT(translations[resolved]);
    document.documentElement.lang = resolved;
  }, []);

  return <LangContext.Provider value={t}>{children}</LangContext.Provider>;
}

export function useT(): Translations {
  return useContext(LangContext);
}
