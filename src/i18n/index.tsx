// Go on https://jsfiddle.net/6bpxsgd4 to see the needed suffixes
// for plurals depending on your language

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import introFR from "./locales/fr/intro.json";
import presentationFR from "./locales/fr/presentation.json";
import projectsFR from "./locales/fr/projects.json";

import introEN from "./locales/en/intro.json";
import presentationEN from "./locales/en/presentation.json";
import projectsEN from "./locales/en/projects.json";

const resources = {
  fr: {
    intro: introFR,
    presentation: presentationFR,
    projects: projectsFR,
  },
  en: {
    intro: introEN,
    presentation: presentationEN,
    projects: projectsEN,
  },
};

i18n.use(initReactI18next).init({
  lng: "fr",
  fallbackLng: "fr",
  resources,
});
export default i18n;
