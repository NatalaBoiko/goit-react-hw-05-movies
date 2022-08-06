import {
  useParams,
  Link,
  Outlet,
  useLocation,
  // useNavigate,
} from 'react-router-dom';

const MovieDetails = () => {
  // const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  return (
    <div>
      <p>Now showing product with id - {movieId}</p>
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
  );
};

export default MovieDetails;
