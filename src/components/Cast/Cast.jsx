import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastItem } from './CastItem/CastItem';
import { castMovie } from 'components/api/requests';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    castMovie(movieId).then(({ cast }) => {
      setMovie(cast);
    });
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <ul>
      {movie.map(({ original_name, profile_path, character, id }) => {
        return (
          <CastItem
            name={original_name}
            profile={profile_path}
            character={character}
            key={id}
          />
        );
      })}
    </ul>
  );
};
export default Cast;
