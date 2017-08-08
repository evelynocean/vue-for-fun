import { login } from 'api/login'
import { setToken } from 'utils/auth'

const user = {
    state: {
        token: '',
        name: '',
        account: ''
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        }
    },

    actions: {
        // login
        Login({ commit }, userInfo) {
            const account = userInfo.account.trim()
            console.log(userInfo)
            return new Promise((resolve, reject) => {
                login(account, userInfo.password).then(response => {
                    const data = response.data
                    setToken(data)
                    commit('SET_TOKEN', data)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user