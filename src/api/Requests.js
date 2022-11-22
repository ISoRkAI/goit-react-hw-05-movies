import { KEY, ORIGIN } from '../constants/credential';

function fetchDataWeek() {
  return fetch(`${ORIGIN}trending/movie/week?api_key=${KEY}`).then(response => {
    return response.json();
  });
}
const apiWeekMovies = { fetchDataWeek };
export default apiWeekMovies;

export const fetchMovie = movieId => {
  return fetch(`${ORIGIN}movie/${movieId}?api_key=${KEY}`).then(response => {
    return response.json();
  });
};

export const castMovie = movieId => {
  return fetch(`${ORIGIN}movie/${movieId}/credits?api_key=${KEY}`).then(
    response => {
      return response.json();
    }
  );
};

export const reviewsMovie = movieId => {
  return fetch(`${ORIGIN}movie/${movieId}/reviews?api_key=${KEY}`).then(
    response => {
      return response.json();
    }
  );
};

export const searchMovie = search => {
  return fetch(`${ORIGIN}search/movie?api_key=${KEY}&query=${search}`).then(
    response => {
      return response.json();
    }
  );
};
