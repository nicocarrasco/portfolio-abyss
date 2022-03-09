// Go on https://jsfiddle.net/6bpxsgd4 to see the needed suffixes
// for plurals depending on your language

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import introFr from "./locales/fr/intro.json";

const resources = {
  fr: {
    intro: introFr,
  },
};

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  resources,
});
export default i18n;
