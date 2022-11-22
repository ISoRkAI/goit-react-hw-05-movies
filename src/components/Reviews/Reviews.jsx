import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ReviewsItem } from './ReviewsItem/ReviewsItem';
import { reviewsMovie } from 'api/requests';

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
      {movie.length > 0 ? (
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
