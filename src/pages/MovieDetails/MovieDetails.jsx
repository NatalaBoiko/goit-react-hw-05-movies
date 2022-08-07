import { useState, useEffect } from 'react';

import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../api';

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
      <button type="button" onClick={backToMovies}>
        Back to movies
      </button>
      {movie && (
        <div>
          <div>
            <img src={poster} alt={title} />
            <h2>
              {title} ({releaseYear})
            </h2>
            <p>User Score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => name).join(' ')}</p>
          </div>

          <p>Additional information</p>
          <hr />

          <ul>
            <li>
              <Link to={'cast'} state={{ from: location?.state?.from }}>
                Cast
              </Link>
              <Link to={'reviews'} state={{ from: location?.state?.from }}>
                Reviews
              </Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
