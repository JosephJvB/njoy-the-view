import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from './Main.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/:vidId',
      name: 'Main',
      component: Main
    }
  ]
})

new Vue({
  el: '#welcome',
  render: createElement => createElement(Main),
  router,
})
