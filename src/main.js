import Vue from 'vue'
import router from './router'
import App from './App.vue'
import ContainBox from '@/components/ContainBox/ContainBox'

Vue.config.productionTip = false

import mandMobile from 'mand-mobile'
import 'mand-mobile/lib/mand-mobile.css'

import request from './utils/request'
import store from './store'

Vue.prototype.$request = request

import Cube from 'cube-ui'

Vue.use(Cube)

Vue.use(mandMobile)

Vue.component('ContainBox',ContainBox);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
