import { Link, useNavigate, useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  const navigate = useNavigate();
  const backLinkHref = location.state?.from ?? '/movies';

  const backToMovies = () => {
    navigate(backLinkHref);
  };
  <>
    <button type="button" onClick={backToMovies}>
      Back to movies
    </button>
    <h2>Oops,... nothing found...</h2>
    <Link to="/">Back to home</Link>
  </>;
};
export default NotFound;
