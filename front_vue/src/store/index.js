import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'
import createPersistedState from 'vuex-persistedstate'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    auth
  },
  strict: debug,
  plugins: debug ? [createLogger(), createPersistedState()] : [createPersistedState()]
})