import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const API_KEY = '894d7d0a519bf37c451c0d145e723359';

const DEFAULT_IMAGE =
  'https://golftec-cms.s3.amazonaws.com/coachImages/no_image_available.jpg';

const TRENDING_MOVIES_ENDPOINT = 'trending/movie/day';
const MOVIE_DETAILS_ENDPOINT = 'movie/';
const MOVIE_SEARCH_ENDPOINT = 'search/movie';
const MOVIE_REVIEWS_ENDPOINT = 'reviews';
const MOVIE_CAST_ENDPOINT = 'credits';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    include_adult: false,
  },
});

export const getTrendingMovies = async (page = 1) =>
  (await api.get(TRENDING_MOVIES_ENDPOINT, { params: { page } })).data;

export const getMovies = async (query, page = 1) =>
  (await api.get(MOVIE_SEARCH_ENDPOINT, { params: { query, page } })).data;

export const getMovieDetails = async id =>
  (await api.get(MOVIE_DETAILS_ENDPOINT + id)).data;

export const getMovieReviews = async id =>
  (await api.get(`${MOVIE_DETAILS_ENDPOINT}${id}/${MOVIE_REVIEWS_ENDPOINT}`))
    .data;

export const getMovieCast = async id =>
  (await api.get(`${MOVIE_DETAILS_ENDPOINT}${id}/${MOVIE_CAST_ENDPOINT}`)).data;

export const getImage = (path, size = 'original') =>
  path ? `${IMAGE_BASE_URL + size}/${path}` : DEFAULT_IMAGE;
