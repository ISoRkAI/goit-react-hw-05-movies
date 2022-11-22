// import { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesItem = ({ title, id }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};
