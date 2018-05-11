import Vue from 'vue'
import Router from 'vue-router'

import Categories from '@/components/Categories'
import Category from '@/components/Category'
import login from '@/components/Login'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/category/*',
      name: 'Category',
      component: Category
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
