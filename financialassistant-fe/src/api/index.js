import axios from 'axios';

const getAxiosInstance = () => axios.create({
    // baseURL: process.env.REACT_APP_BASEURL,
    headers: {'access-token': localStorage.getItem("token")},
});

export default getAxiosInstance;