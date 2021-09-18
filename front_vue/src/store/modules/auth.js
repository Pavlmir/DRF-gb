import { HTTP } from '../../api/common'

// initial state
const state = () => ({
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
})

// getters
const getters = {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
}

// actions
const actions = {
    login({ commit }, data) {
        return new Promise((resolve, reject) => {
            commit('auth_request')
            HTTP.post('/api-token-auth/', {
                 'username': data.username,
                 'password': data.password
                 })
                .then(response => {
                    const token = response.data.token
                    const user = response.data.user
                    localStorage.setItem('token', token)
                    HTTP.defaults.headers.common['Authorization'] = token
                    commit('auth_success', token, user)
                    resolve(response)
                })
                .catch(error => {
                    commit('auth_error')
                    localStorage.removeItem('token')
                    reject(error)
                })
        })
    },
    logout({ commit }) {
        return new Promise((resolve) => {
            commit('logout')
            localStorage.removeItem('token')
            delete HTTP.defaults.headers.common['Authorization']
            resolve()
        })
    }
}

// mutations
const mutations = {
    auth_request(state) {
        state.status = 'loading'
    },

    auth_success(state, token, user) {
        state.status = 'success'
        state.token = token
        state.user = user
    },

    auth_error(state) {
        state.status = 'error'
    },

    logout(state) {
        state.status = ''
        state.token = ''
    }
}

export default {
    name: 'auth',
    namespaced: true,
    stateFactory: true,
    state,
    getters,
    actions,
    mutations
}