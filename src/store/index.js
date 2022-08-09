import Vue from 'vue'
import Vuex from 'vuex'

const app = {
  state: {orderKey:1}, //1-->Failed, 2-->Close, 3-->Open, 4-->All
  mutations: {},
  actions: {},
  getters: {}
}

const data = {
  state: {},
  mutations: {},
  actions: {}
}

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    data
  }
})
