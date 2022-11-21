import { KEY } from '../constants/credential';

function fetchDataWeek() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  ).then(response => {
    return response.json();
  });
}
const apiWeekMovies = { fetchDataWeek };
export default apiWeekMovies;

export const fetchMovie = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${KEY}`
  ).then(response => {
    return response.json();
  });
};

export const castMovie = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY}`
  ).then(response => {
    return response.json();
  });
};

export const reviewsMovie = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY}`
  ).then(response => {
    return response.json();
  });
};

export const searchMovie = search => {
  console.log(search);
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${search}`
  ).then(response => {
    return response.json();
  });
};
