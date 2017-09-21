// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import CxltToastr from 'cxlt-vue2-toastr'
import App from './App'
import router from './router'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.use(VeeValidate)
Vue.use(CxltToastr)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
