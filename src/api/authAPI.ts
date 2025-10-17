import axiosClient from './axiosClient'
import configurations from '../configurations'
import { Login } from '../interfaces/auth'

const authAPI = {
    requestLogin: (data: Login) => {
        return axiosClient.post(
            configurations.API_ENDPOINT + '/user/login',
            data
        )
    },

    requestRegister: (data: Login) => {
        axiosClient.post(
            configurations.API_ENDPOINT + '/user/register',
            data
        )
    }
}
