import apiWeekMovies from 'api/Requests';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    apiWeekMovies.fetchDataWeek().then(({ results }) => {
      setMovies(results);
    });
  }, []);

  return (
    <main>
      <h1>Trends of the week</h1>
      <ul>
        {movies.map(({ title, id }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default Home;
