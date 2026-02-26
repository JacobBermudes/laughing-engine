import React, { createContext, useContext, useState, useEffect } from "react";

export type Lang = "en" | "ru";

interface Translations {
  navLinks: Array<{ name: string; href: string }>;
  hero: {
    tag: string;
    absolute: string;
    protection: string;
    underPressure: string;
    paragraph: string;
    requestSpec: string;
    viewSystems: string;
  };
  // add other sections as needed
}

const translations: Record<Lang, Translations> = {
  en: {
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Systems", href: "#systems" },
      { name: "Industries", href: "#industries" },
      { name: "Calculator", href: "#calculator" },
      { name: "Catalog", href: "#catalog" },
    ],
    hero: {
      tag: "High-Performance Engineering",
      absolute: "Absolute",
      protection: "Protection",
      underPressure: "Under Pressure.",
      paragraph:
        "Industrial-grade anti-corrosion and protective coatings formulated for severe environments. Engineered to meet and exceed global ISO 12944 standards.",
      requestSpec: "Request Specification",
      viewSystems: "View Systems",
    },
  },
  ru: {
    navLinks: [
      { name: "О нас", href: "#about" },
      { name: "Системы", href: "#systems" },
      { name: "Области применения", href: "#industries" },
      { name: "Калькулятор", href: "#calculator" },
      { name: "Каталог", href: "#catalog" },
    ],
    hero: {
      tag: "Высокопроизводительное инженерное решение",
      absolute: "Абсолютная", 
      protection: "Защита",
      underPressure: "Под давлением.",
      paragraph:
        "Промышленные антикоррозийные и защитные покрытия, разработанные для экстремальных условий. Разработано с соблюдением и превышением глобальных стандартов ISO 12944.",
      requestSpec: "Запрос спецификации",
      viewSystems: "Просмотреть системы",
    },
  },
};

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
  toggle: () => void;
}

const defaultContext: LanguageContextValue = {
  lang: "en",
  setLang: () => {},
  t: translations.en,
  toggle: () => {},
};

const LanguageContext = createContext<LanguageContextValue>(defaultContext);

export const LanguageProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [lang, setLang] = useState<Lang>(
    (localStorage.getItem("lang") as Lang) || "en"
  );

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "ru" : "en"));

  return (
    <LanguageContext.Provider
      value={{ lang, setLang, t: translations[lang], toggle }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
