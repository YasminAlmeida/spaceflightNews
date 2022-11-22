import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3'
});

export const api = {
  getAllArticles: async() => {
    let response = await axiosInstance.get('/articles');
    return response.data;
  },
}
