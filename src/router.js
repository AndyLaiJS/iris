import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      //path: '/',
      //name: 'home',
      //component: Home
      path: '/',
      name: 'downloads',
      component: () => import('./views/Downloads.vue')
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('./views/Portfolio.vue')
    },
    {
      path: '/downloads',
      name: 'downloads',
      component: () => import('./views/Downloads.vue')
    }*/
  ]
})
