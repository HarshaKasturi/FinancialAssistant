import getAxiosInstance from './'

export const signIn = (data) => {
    const axios = getAxiosInstance();
    return axios.post('/sign_in', data)
}