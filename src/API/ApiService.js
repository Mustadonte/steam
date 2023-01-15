import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://steam2.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': 'd968d09179msh73ca21ec29623ffp1764d8jsn20a18745ae32',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
  },
});

export const getGameByKeyword = async query => {
  try {
    const resp = await instance.get(
      `search/${query.search}/page/${query.page}`
    );
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const getGameById = async id => {
  try {
    const result = await instance.get(`appDetail/${id}`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
