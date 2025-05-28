import axiosInstance from "../utils/axiosInstance";
export const getShortUrl = async (url,customUrl=undefined)=>{
    const {data} = await axiosInstance.post('/api/create/', {
        url,
        slug:customUrl
    })
    return data.shortUrl;
}