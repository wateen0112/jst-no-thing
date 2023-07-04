import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import AppConfig from '../app.config';
import { useAuth } from '~/composables/useAuth';
const errorHandler = async (error: AxiosError) => {
    const { RefreshToken } = useAuth()
    const config: AxiosRequestConfig | undefined = error?.config
    if (error.response?.status === 401) {
        const accessToken = await RefreshToken();

        if (config)
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessToken}`

            }
        return axios(config as AxiosRequestConfig)



    }
    return Promise.reject(error)
}




const requestHandler = (request: AxiosRequestConfig) => {
    const { GetAccessToken } = useAuth()

    if (request.headers && process.client) {

        request.headers['Authorization'] = `Bearer ${GetAccessToken()}`;
        // request.headers['lang'] = localStorage.getItem('lang')
   
        
    }
    return request;
};
const responseHandler = (response: AxiosResponse) => {


    // store.commit('SET_LOADING', false)

    return response;


};
// const progressHandler = (progressEvent: any) => {

//     // const total = parseFloat(progressEvent.currentTarget.responseHeaders['Content-Length'])
//     // const current = progressEvent.currentTarget.response.length

//     // let percentCompleted = Math.floor(current / total * 100)

// }

const axiosIns = axios.create({
    baseURL: `${AppConfig.DOMAIN_HOST}/`,
    headers: { lang: 'en', 'X-Requested-With': 'XMLHttpRequest' },

});

axiosIns.interceptors.request.use(requestHandler)
axiosIns.interceptors.response.use(responseHandler, errorHandler)


export { axiosIns }