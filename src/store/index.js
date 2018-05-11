import Vuex from 'vuex'
import Vue from 'vue'
import categories from './categories'
import category from './category'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    categories,
    category
  }
})
