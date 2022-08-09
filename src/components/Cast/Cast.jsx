import { fetchMovieCredits } from '../../api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <CastContainer>
      {credits.length > 0 && (
        <CastList>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <CastItem key={id}>
                <Img src={photo} alt={name} />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </CastContainer>
  );
};

export default Cast;
