import { castMovie } from 'api/Requests';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import placeholder from '../../images/placeholder.png';
import { Img } from './CastStyled';

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
    <>
      <ul>
        {movie.map(({ original_name, profile_path, character, id }) => (
          <li key={id}>
            <Img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : placeholder
              }
              alt=""
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
