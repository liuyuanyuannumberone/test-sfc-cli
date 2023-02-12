import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {user},
  state: {},
  mutations: {},
  getters: {},
  actions: {}
})

export default store
