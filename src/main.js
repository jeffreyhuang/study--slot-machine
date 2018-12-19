import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Papercss from 'papercss/dist/paper.min.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
