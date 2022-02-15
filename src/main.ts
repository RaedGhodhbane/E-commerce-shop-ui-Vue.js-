import { createApp } from 'vue';
import axios from 'axios';
import i18n from './i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import './index.css';

const lang = localStorage.getItem('lang') || 'en';
axios.defaults.baseURL = 'http://localhost:8080/admin/category';
axios.defaults.headers.common['Accept-Language'] = lang;

createApp(App).use(store).use(router).use(i18n)
  .mount('#app');
