import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import saveInLocal from './plugin/saveinLocal'

Vue.use(Vuex)

export default new Vuex.Store({
  // 严格模式
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  plugins: [ saveInLocal ]
})
