// using with vue-i18n in CDN
/*eslint-disable */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
  if (!isServer) {
    if (typeof window['very-vue'] !== 'undefined') {
      if (!('langs' in window['very-vue'])) {
        window['very-vue'].langs = {};
      }
      window['very-vue'].langs[lang.i.locale] = lang;
    }
  }
};
/*eslint-enable */