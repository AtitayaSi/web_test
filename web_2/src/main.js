import Vue from 'vue'
//import App from './components/App.vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BModal, VBModal, NavbarPlugin, BNavbar } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap_Sketshy.min.css'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.component('BModal', BModal)
Vue.directive('b-modal', VBModal)
Vue.component('b-navbar', BNavbar)
Vue.use(NavbarPlugin)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
