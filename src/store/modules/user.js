import { login } from 'api/login'
// import { getToken, setToken, removeToken } from 'utils/auth'

const user = {
    state: {
        token: '',
        name: '',
        account: ''
    },

    mutations: {
        LOGIN_SUCCESS: (state, userInfo) => {
            console.log('login success')
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
                    console.log('Login ', data)
                    commit('LOGIN_SUCCESS', data)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
}

export default user