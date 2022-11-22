import { KEY, ORIGIN } from '../constants/credential';

async function fetchDataWeek() {
  const response = await fetch(`${ORIGIN}trending/movie/week?api_key=${KEY}`);
  return await response.json();
}
const apiWeekMovies = { fetchDataWeek };
export default apiWeekMovies;

export const fetchMovie = async movieId => {
  const response = await fetch(`${ORIGIN}movie/${movieId}?api_key=${KEY}`);
  return await response.json();
};

export const castMovie = async movieId => {
  const response = await fetch(
    `${ORIGIN}movie/${movieId}/credits?api_key=${KEY}`
  );
  return await response.json();
};

export const reviewsMovie = async movieId => {
  const response = await fetch(
    `${ORIGIN}movie/${movieId}/reviews?api_key=${KEY}`
  );
  return await response.json();
};

export const searchMovie = async search => {
  const response = await fetch(
    `${ORIGIN}search/movie?api_key=${KEY}&query=${search}`
  );
  return await response.json();
};
