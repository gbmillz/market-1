export default {

  state: {
    name: 'Welcome to Ahia Owerri',
    markets: {
      Alaba: [{
        name: 'Electricals',
        items: ['Cables', 'sockets']
      },
      {
        name: 'General Goods',
        items: ['pens', 'books']
      },
      {
        name: 'Spare part',
        items: ['pens', 'books']
      }],
      Relief: [{
        name: 'Vegetables',
        items: ['Tomatoe', 'Ugu']
      },
      {
        name: 'Fruits',
        items: ['Pawpaw', 'pineapple']
      }]
    }
  },

  actions: {
    changeCategoryName ({commit}, {market, index, name}) {
      commit('change_category_name', {market, index, name})
    }
  },

  mutations: {
    change_category_name (state, {market, index, name}) {
      state.markets[market][index].name = name
    }
  },

  getters: {
    name (state) {
      return state.name
    },
    markets (state) {
      return state.markets
    }
  }
}
