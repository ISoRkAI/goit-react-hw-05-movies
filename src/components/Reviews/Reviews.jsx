import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { reviewsMovie } from 'api/requests';
import { ReviewsItem } from './ReviewsItem/ReviewsItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    reviewsMovie(movieId).then(({ results }) => {
      setMovie(results);
    });
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <ul>
      {movie ? (
        movie.map(({ author, content, id }) => (
          <ReviewsItem author={author} content={content} key={id} />
        ))
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};
export default Reviews;
