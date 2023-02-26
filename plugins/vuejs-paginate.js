import Vue from 'vue';
import VuejsPaginate from 'vuejs-paginate'
const isBrowser = typeof window !== "undefined"
if (process.client) {
  Vue.component('my-paginate', VuejsPaginate)
}


