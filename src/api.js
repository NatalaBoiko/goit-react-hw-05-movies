import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '2123fea73978ac77fe6a3f347cf7ced6',
  include_adult: false,
};

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const fetchTrending = async () => {
  return axios
    .get(`/trending/all/day?`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMG_URL + poster,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchByQuery = async query => {
  return axios
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMG_URL + poster,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const fetchMovieDetails = movieId => {
  return axios
    .get(`/movie/${movieId}?`)
    .then(
      ({
        data: {
          id,
          poster_path: poster,
          title,
          release_date: releaseYear,
          vote_average: userScore,
          overview,
          genres,
        },
      }) => ({
        id,
        poster: IMG_URL + poster,
        title,
        releaseYear: new Date(releaseYear).getFullYear(),
        userScore: Math.round(userScore * 10),
        overview,
        genres,
      })
    )
    .catch(error => {
      console.log(error.message);
    });
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=2123fea73978ac77fe6a3f347cf7ced6&language=en-US

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=2123fea73978ac77fe6a3f347cf7ced6&language=en-US&page=1
