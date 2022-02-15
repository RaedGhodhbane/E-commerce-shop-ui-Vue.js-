/* eslint-disable object-shorthand */
import { createI18n } from 'vue-i18n';
import en from './assets/i18n/en.json';
import es from './assets/i18n/es.json';
import deut from './assets/i18n/deut.json';
import fr from './assets/i18n/fr.json';
import ita from './assets/i18n/ita.json';

export default createI18n({
  locale: localStorage.getItem('lang') || 'en',
  messages: {
    en: en,
    fr: fr,
    deut: deut,
    es: es,
    ita: ita,
  },
});
