import Vue from 'vue'
import Router from 'vue-router'
import Categories from '@/components/Categories'
import Category from '@/components/Category'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Categoriez',
      component: Categories
    },
    {
      path: '/category/*',
      name: 'Category',
      component: Category
    }
  ]
})
