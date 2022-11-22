import { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { SearchMovie } from '../../components/SearchMovies/SearchMovies';
import { searchMovie } from 'api/requests';
import { MoviesItem } from './MuviesItem/MuviesItem';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    searchMovie(query).then(({ results }) => {
      setMovies(results);
    });
    return;
  }, [query]);

  const formSubmit = search => {
    setSearchParams({ query: search });
    setMovies([]);
  };

  return (
    <div>
      <SearchMovie onSubmit={formSubmit} />
      <ul>
        {movies.length > 0 &&
          movies.map(({ original_title, id }) => (
            <MoviesItem title={original_title} id={id} key={id} />
          ))}
        <Suspense>
          <Outlet />
        </Suspense>
      </ul>
    </div>
  );
};
export default Movies;
