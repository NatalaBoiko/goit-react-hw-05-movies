import { useState, useEffect } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { fetchByQuery } from '../../api';
import NotFound from '../NotFound';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    searchQuery && fetchByQuery(searchQuery).then(setMovies);
  }, [searchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetchByQuery(query);
    setMovies(response);
    setSearchParams({ query });
    setQuery('');
  };
  const onChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={onChange} />
        <button type="submit">search</button>
      </form>
      {/* {movies && (
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
      )} */}

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

export default Movies;

// import { useState, useEffect } from 'react';
// import { useSearchParams, Link, useLocation } from 'react-router-dom';
// import { fetchByQuery } from '../../api';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams('');
//   const location = useLocation();
//   const query = searchParams.get('query');

//   useEffect(() => {
//     query && fetchByQuery(query).then(setMovies);
//   }, [query]);

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetchByQuery(query);
//     setMovies([...response]);
//     setSearchParams('');
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={e => setSearchParams({ query: e.target.value })}
//         />
//         <button type="submit">search</button>
//       </form>
//       {movies && (
//         <ul>
//           {movies.map(({ id, title, poster }) => (
//             <li key={id}>
//               <Link to={`/movies/${id}`} state={{ from: location }}>
//                 <img src={poster} alt={title} />
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default Movies;
