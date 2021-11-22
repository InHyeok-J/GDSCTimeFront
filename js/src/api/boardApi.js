import axios from 'axios';

export const getBoardList = async (category) => {
    const response = await axios.get(`/api/board?category=${category}`);
    return response.data.data;
};

export const getBoardDetail = async (id) => {
    const response = await axios.get(`/api/board/detail/${id}`);
    return response.data.data;
};

export const getBoardComment = async (id) => {
    const response = await axios.get(`/api/board/${id}/comment`);
    return response.data.data;
};

export const postBoard = async (data) => {
    console.log(data);
    const response = await axios.post('/api/board', data);
    return response.data.data;
};

export const postComment = async (data) => {
    const response = await axios.post('/api/board/comment', data);
    return response.data.data;
};

export const getMainMyBoard = async () => {
    const response = await axios.get('/api/board/main/myboard');
    return response.data.data;
};
