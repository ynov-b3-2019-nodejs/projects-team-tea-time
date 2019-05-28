import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

/*Vue.config.productionTip = false*/

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    /*path: '/',
    component: require('./components/HelloWorld.vue')*/
    path: '/',
    component: require('./components/Home.vue')
  }, {
    path: '/room/:id(\\d+)',
    component: require('./components/Room.vue')
  }, {
    path: '*',
    redirect: '/'
  }]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
