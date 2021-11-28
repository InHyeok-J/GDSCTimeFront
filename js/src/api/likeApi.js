import axios from 'axios';

export const like = async (data) => {
    const response = await axios.post('/api/like', data);
    return response.data.data;
};
