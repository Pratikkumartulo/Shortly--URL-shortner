import axios, { isAxiosError } from "axios";

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000",
    timeout:10000, //10s
    withCredentials: true,
})


axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response){
            const {status, data} = error.response;
            switch(status){
                case 400:
                    console.error("Bad Request:", data);
                    break;
                case 401:
                    console.error("Unauthorized:", data);
                    break;
                case 403:
                    console.error("Forbidden", data);
                case 404:
                    console.error("Not found",data);
                case 500:
                    console.error("Server error",data);
                default:
                    console.log(`Error ${status}`,data);
                }
        }else if (error.request){
            console.log("Netork error : No response recieved",error.request());
        }else{
            console.log("Error",error.message);
        }

        return Promise.reject({
            message:error.message?.data?.message || error.message || "Unknown error occured",
            status : error.response?.status,
            data: error.response?.data,
        });
    }
);

export default axiosInstance