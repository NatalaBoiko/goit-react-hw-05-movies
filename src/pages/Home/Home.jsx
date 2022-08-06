import { fetchTrending } from '../../api';

const Home = () => {
  fetchTrending();
  return (
    <>
      <h2>Trending today</h2>
    </>
  );
};

export default Home;
