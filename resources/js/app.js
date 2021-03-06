
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('list-emails', require('./components/list-emails.vue'));
Vue.component('show-email', require('./components/show-email.vue'));
Vue.component('show-email-body', require('./components/show-email-body.vue'));
Vue.component('i-frame', require('./components/i-frame.vue'));
Vue.component('statistics', require('./components/statistics.vue'));


const app = new Vue({
    el: '#app'
});
