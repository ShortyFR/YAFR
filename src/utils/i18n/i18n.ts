import I18n from "react-native-i18n";
import i18n_en from "./en";
import i18n_fr from "./fr";

export const initI18N = () => {
  // Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
  I18n.fallbacks = true;

  I18n.defaultLocale = "en";

  I18n.translations = {
    en: i18n_en,
    fr: i18n_fr,
  };
};
