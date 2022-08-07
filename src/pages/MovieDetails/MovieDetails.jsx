import { useState, useEffect } from 'react';

import { useParams, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import {
  Btn,
  MovieContainer,
  Img,
  MovieInfo,
  MovieTitle,
  AddInfo,
  InfoList,
  InfoLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const { poster, title, releaseYear, userScore, overview, genres } =
    movie ?? {};

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const backToMovies = () => {
    navigate(backLinkHref);
  };

  return (
    <div>
      <Btn type="button" onClick={backToMovies}>
        Back to movies
      </Btn>
      {movie && (
        <div>
          <MovieContainer>
            <Img src={poster} alt={title} />
            <MovieInfo>
              <MovieTitle>
                {title} ({releaseYear})
              </MovieTitle>
              <p>User Score: {userScore}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(({ name }) => name).join(' ')}</p>
            </MovieInfo>
          </MovieContainer>

          <AddInfo>Additional information</AddInfo>

          <InfoList>
            <li>
              <InfoLink to={'cast'} state={{ from: location?.state?.from }}>
                Cast
              </InfoLink>
            </li>
            <li>
              <InfoLink to={'reviews'} state={{ from: location?.state?.from }}>
                Reviews
              </InfoLink>
            </li>
          </InfoList>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
