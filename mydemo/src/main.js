// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './ulits/http'
import './mock'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import directives from './dirctive'
import loading from './pulig/loading'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(loading)
for (var item in directives) {
  Vue.directive(item, directives[item])
}

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

export default vm
