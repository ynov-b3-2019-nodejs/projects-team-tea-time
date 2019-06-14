import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
//import JQuery from 'jquery';
import 'bootstrap';
import './assets/stylesheets/style.scss';

import Home from './components/Home';
import Room from './components/Room';

Vue.config.productionTip = false;
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    name: 'root'
  },
  {
    path: '/room/:roomName',
    component: Room
  },
  {
    path: '*',
    redirect: '/'
  }]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
