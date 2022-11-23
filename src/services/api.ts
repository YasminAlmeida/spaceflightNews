import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3'
});

export const api = {
  getAllArticles: async(_limit:number) => {
    let response = await axiosInstance.get('/articles', {

      params: {
        _limit: _limit,
      }
    });
    return response.data;
  },
}
