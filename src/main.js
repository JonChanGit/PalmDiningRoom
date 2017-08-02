// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App';
import VModal from 'vue-js-modal';
// import router from './router';

import '@/common/stylus/index.styl';
import '@/common/css/reset.css';

Vue.config.productionTip = false;
Vue.use(VModal, { componentName: 'foo-modal' });
Vue.use(BootstrapVue);
/* eslint-disable no-new */
new Vue({
  el: '#app',
//  router,
  template: '<App/>',
  components: { App: App }
});

// router.push('/goods');
