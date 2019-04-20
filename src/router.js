import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/Home',
      name: 'login',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    
    {
      path: '/stepone',
      name: 'stepone',
      component: () => import('./views/StepOne.vue')
    },
    {
      path: '/steptwo',
      name: 'steptwo',
      component: () => import('./views/StepTwo.vue')
    },
    {
      path: '/stepthree',
      name: 'stepthree',
      component: () => import('./views/StepThree.vue')
    },
    {
      path: '/stepfour',
      name: 'stepfour',
      component: () => import('./views/StepFour.vue')
    },
    {
      path: '/stepfive',
      name: 'stepfive',
      component: () => import('./views/StepFive.vue')
    },
    {
      path: '/stepsix',
      name: 'stepsix',
      component: () => import('./views/StepSix.vue')
    }
  ]
})
