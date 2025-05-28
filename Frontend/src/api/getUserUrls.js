import axiosInstance from "../utils/axiosInstance";

export const getUsersUrs = async () => {
    try {
        const { data } = await axiosInstance.get('/user/urls');
        return data.data.urls;
    } catch (error) {
        console.error('Error fetching user URLs:', error);
        throw error;
    }
}