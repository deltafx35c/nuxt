import Vuex from 'vuex'
import Settings from '../settings'

const createStore = () => {
  return new Vuex.Store({
    state: {
      gConfig: {
        apiDomain : Settings.apiDomain
      }
    }
  })
}

export default createStore