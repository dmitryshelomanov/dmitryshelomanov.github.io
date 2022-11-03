import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { en, ru } from "make-plural";
import { setupI18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { messages as messagesEn } from "./locales/en.mjs";
import { messages as messagesRu } from "./locales/ru.mjs";

const ctx = createContext({ locale: "ru", setLocale: () => {} });

export function useLocale() {
  const rs = useContext(ctx);

  return rs;
}

export function LocaleProvider({ children } = {}) {
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") ?? "ru"
  );
  const [i18n] = useState(
    () =>
      setupI18n({
        messages: {
          en: messagesEn,
          ru: messagesRu,
        },
        localeData: {
          en: { plurals: en },
          ru: { plurals: ru },
        },
        locale,
      }),
    []
  );

  const changeLocale = useCallback((locale) => {
    localStorage.setItem("locale", locale);
    setLocale(locale);
  }, []);

  useEffect(() => {
    i18n.activate(locale);
  }, [i18n, locale]);

  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      <ctx.Provider value={{ locale, setLocale: changeLocale }}>
        {children}
      </ctx.Provider>
    </I18nProvider>
  );
}
