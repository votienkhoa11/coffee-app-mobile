import axios from 'axios'
import configs from '../configurations'
import utils from '../utils'

const {storageKey} = configs

const axiosClient = axios.create({
    baseURL: configs.API_ENDPOINT,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.response.use(
    response => {
        return response
    },
    async error => {
    return Promise.reject(error)
})

axiosClient.interceptors.request.use(async config => {
    const token = await utils.getData(storageKey.auth)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default axiosClient