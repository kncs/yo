import Vue from 'vue'
import Router from 'vue-router'
import Overview from '@/components/overview'

import 'font-awesome/css/font-awesome.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'overview',
      component: Overview
    }
  ]
})
