import Vue from 'vue'
//import App from './components/App.vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BModal, VBModal, NavbarPlugin, BNavbar } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.component('BModal', BModal)
Vue.directive('b-modal', VBModal)
Vue.component('b-navbar', BNavbar)
Vue.use(NavbarPlugin)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
