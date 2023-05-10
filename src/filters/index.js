import Vue from 'vue';
import date from './date';
import money from './money';

Vue.filter('formatDate', date);
Vue.filter('formatMoney', money);
