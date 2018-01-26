import * as TYPE from '../actionType/userType'

const state = {
  userInfo: {
    apiAccessToken: '',
    userName: '',
    userId: ''
  }
}

const getters = {
  // userInfo: state => state.userInfo
}

const actions = {
  setUserInfo ({ commit }, param) {
    console.log(param)
    commit(TYPE.USERINFO, param)
  }
}

const mutations = {
  [TYPE.USERINFO] (state, param) {
    state.userInfo = param
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
