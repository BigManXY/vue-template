import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './modules/userStore'

Vue.use(Vuex)

// state 的初始值
const state = {
  requesting: false,
  error: {}
}

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
}

// 默认输出sore 里面的值
export default new Vuex.Store({
  state,
  getters,
  modules: {
    userStore
  }
})
