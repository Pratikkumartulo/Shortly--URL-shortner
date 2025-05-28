import axiosInstance from "../utils/axiosInstance";
export const LoginUser = async (email, password) => {
    const { data } = await axiosInstance.post('/api/user/login', {
        email,
        password,
    });
    return data;
}

export const RegisterUser = async (name, email, password) => {
    const { data } = await axiosInstance.post('/api/user/register', {
        name,
        email,
        password,
    });
    return data;
}

export const GetCurrentUser = async () => {
    const { data } = await axiosInstance.get('/api/user/me');
    return data;
}

export const logout = async () => {
    const { data } = await axiosInstance.post('/api/user/logout');
    return data;
};