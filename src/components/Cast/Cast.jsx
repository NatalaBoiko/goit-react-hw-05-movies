import { fetchMovieCredits } from '../../api';
import NotFound from '../../pages/NotFound';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <>
      <h2>Cast</h2>;
      {credits.length > 0 ? (
        <ul>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <li key={id}>
                <img src={photo} alt={name} />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Cast;
