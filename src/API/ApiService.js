import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://steam2.p.rapidapi.com/search/Strike/page/1',
//   headers: {
//     'X-RapidAPI-Key': 'd968d09179msh73ca21ec29623ffp1764d8jsn20a18745ae32',
//     'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
//   },
// };

const instance = axios.create({
  baseURL: 'https://steam2.p.rapidapi.com/search/',
  headers: {
    'X-RapidAPI-Key': 'd968d09179msh73ca21ec29623ffp1764d8jsn20a18745ae32',
    'X-RapidAPI-Host': 'steam2.p.rapidapi.com',
  },
});

export const getGameByKeyword = async keyword => {
  try {
    const resp = await instance.get(`${keyword}/page/1`);

    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
