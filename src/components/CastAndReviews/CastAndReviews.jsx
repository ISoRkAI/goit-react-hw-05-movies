import { NavLink } from 'react-router-dom';
import { Container } from './CastAndReviewsStyled';

export const CastAndReviews = ({ movieId }) => {
  const navItem = [
    { href: `/movies/${movieId}/cast`, text: 'Cast' },
    { href: `/movies/${movieId}/reviews`, text: 'Reviews' },
  ];

  return (
    <Container>
      <p>Additional information</p>
      <ul>
        {navItem.map(({ href, text }) => (
          <li key={text}>
            <NavLink to={href}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </Container>
  );
};
