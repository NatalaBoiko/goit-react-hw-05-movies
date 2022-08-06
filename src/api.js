import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '2123fea73978ac77fe6a3f347cf7ced6',
  include_adult: false,
};

export const fetchTrending = async () => {
  const { data } = await axios.get(`trending/all/day?`);
  return data.results;
};

// https://api.themoviedb.org/3/trending/all/day?api_key=2123fea73978ac77fe6a3f347cf7ced6

// https://api.themoviedb.org/3/search/movie?api_key=2123fea73978ac77fe6a3f347cf7ced6&language=en-US&page=1&include_adult=false

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=2123fea73978ac77fe6a3f347cf7ced6&language=en-US

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=2123fea73978ac77fe6a3f347cf7ced6&language=en-US

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=2123fea73978ac77fe6a3f347cf7ced6&language=en-US&page=1
