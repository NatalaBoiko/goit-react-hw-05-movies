import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from '../../api';
import NotFound from '../NotFound';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetchTrending().then(setMovies);
  }, []);

  return (
    <>
      <h1>Tranding today</h1>
      {movies.length > 0 ? (
        <ul>
          {movies.map(({ id, title, poster }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                <img src={poster} alt={title} />
                {title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Oops,... nothing found...</h2>
      )}
    </>
  );
};

export default Home;
