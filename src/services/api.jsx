import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org';
const API_KEY = '8776cc9f66dd32d7c5ecc9b66eb74c99';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/3/trending/movie/day?api_key=${API_KEY}`
  );

  return data;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data;
};

export const getMovieByKeyword = async query => {
  const { data } = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return data;
};
