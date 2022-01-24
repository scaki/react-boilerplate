import axios from "axios";

const instance = axios.create({
    baseURL: "https://randomuser.me/api",
    timeout: 1000,
    validateStatus: (status) => {
        return status >= 200 && status < 300;
    },
});
instance.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        if (error.response.status === 401) {
            // logout or refresh token
        } else {
            alert(error.response.data.message)
        }

        return Promise.reject(error);
    }
);

const apiService = instance;
export default apiService;