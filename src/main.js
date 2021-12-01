import Vue from 'vue'
import App from './App.vue'
import store from '@/state/store'
import Web3 from 'web3'
import * as artifacts from '../build/contracts/Adoption.json'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
const initContract = require('@truffle/contract')

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// ----------------------------------------------------------------------------------------- STEP 1
// Modern dapp browsers...
if (window.ethereum) {
  Vue.prototype.$web3Provider = window.ethereum;
}
// Legacy dapp browsers...
else if (window.web3) {
  Vue.prototype.$web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  Vue.prototype.$web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
// ----------------------------------------------------------------------------------------- STEP 1


// ----------------------------------------------------------------------------------------- STEP 2
instantiateContract()
// ----------------------------------------------------------------------------------------- STEP 2

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

function instantiateContract() {
  Vue.prototype.$AdoptionContract = initContract(artifacts.default);
  // Set the provider for our contract
  Vue.prototype.$AdoptionContract.setProvider(Vue.prototype.$web3Provider);
}
