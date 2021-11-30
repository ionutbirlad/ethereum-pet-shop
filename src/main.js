import Vue from 'vue'
import App from './App.vue'
import store from '@/state/store'

// import AppEth from './app.js'

Vue.config.productionTip = false

// console.log(AppEth)
// console.log(store.getters['pets/allPets'])
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
