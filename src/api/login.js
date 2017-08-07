import axios from 'utils/axios'

export function login(account, password) {
    const data = {
        account,
        password
    }
    return axios({
        url: '/login',
        method: 'post',
        data
    })
}