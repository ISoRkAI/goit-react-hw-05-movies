import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { fetchMovie } from 'components/api/requests';
import { CastAndReviews } from 'components/CastAndReviews/CastAndReviews';

import {
  Container,
  ContainerInfo,
  GenreItem,
  GenreList,
  Img,
} from './MovieDetailsStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovie(movieId).then(results => {
      setMovie(results);
    });
  }, [movieId]);

  const goBack = () => {
    navigate(from);
  };

  if (!movie) {
    return;
  }

  return (
    <div>
      <button type="button" onClick={goBack}>
        Go back
      </button>
      <Container>
        <Img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
        />
        <ContainerInfo>
          <h1>
            {movie.original_title} ({movie.release_date.slice(0, 4)})
          </h1>
          <p>User Score: {Number.parseInt(movie.vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <GenreList>
            {movie.genres.map(({ id, name }) => (
              <GenreItem key={id}>{name}</GenreItem>
            ))}
          </GenreList>
        </ContainerInfo>
      </Container>
      <div>
        <CastAndReviews movieId={movieId} />
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetails;
