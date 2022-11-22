export const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h2>Author: {author}</h2>
      <p>{content}</p>
    </li>
  );
};
