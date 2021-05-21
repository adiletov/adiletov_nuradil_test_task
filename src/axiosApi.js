import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'http://intravision-task.test01.intravision.ru/'
})


axiosApi.interceptors.request.use(function (configure) {
    if (configure.url.indexOf('/Tenants') >= 0) configure.headers = {};
    else {
        const token = JSON.parse(localStorage.getItem('quid')).auth;
        if (token.auth){
            if (configure.method === 'get' && configure.url.indexOf('/odata/tasks') >= 0){
                configure.params = {
                    tenantguid: token.auth,
                }
            }else{
                configure.url = `/api/${token.auth}${configure.url}`
            }
        }
        // configure.headers.Authorization = token ? `${token}` : '';
    }
    return configure
})

axiosApi.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    if (!error.response) {
        console.error('NO CONNECTION')
    } else {
        return Promise.reject(error.response);
    }
});
export default axiosApi