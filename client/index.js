import Vue from 'vue'
import VueRouter from 'vue-router'

const Main  =require('./Main.vue').default

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
