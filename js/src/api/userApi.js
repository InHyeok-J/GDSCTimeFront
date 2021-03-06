import axios from 'axios';

export const signUp = async (data) => {
    const response = await axios.post('/api/user', data);
    return response.data.data;
};

export const login = async (data) => {
    const response = await axios.post('/api/user/login', data);
    return response.data.data;
};

export const logout = async () => {
    const response = await axios.get('/api/user/logout');
    return response.data.data;
};

export const getUser = async () => {
    const response = await axios.get('/api/user');
    console.log(response.data);
    return response.data.data;
};

export const changeNickname = async (data) => {
    const response = await axios.patch('/api/user', data);
    return response.data.data;
};
