import { searchMovie } from 'api/Requests';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useSearchParams } from 'react-router-dom';
import { SearchMovie } from '../../components/SearchMovies/SearchMovies';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
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
          movies.map(({ original_title, id }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
              </li>
            );
          })}
        <Suspense>
          <Outlet />
        </Suspense>
      </ul>
    </div>
  );
};
export default Movies;
