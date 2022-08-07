import { fetchMovieReviews } from '../../api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsContainer } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </ReviewsContainer>
  );
};

export default Reviews;
