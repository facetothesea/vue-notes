// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Menu from './components/HomeCircleMenu'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(App)

// Vue.use(CircleMenu)
Vue.component('CircleMenu', Menu)

const Home = {
  template: '<div>home page</div>'
}
const About = {
  template: '<div>about page</div>'
}
const router = new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/homecircle',
      component: Menu
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App,
    Home,
    About,
    Menu
  }
})
