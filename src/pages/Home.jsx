import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { TrendingMoviesGallery } from 'components/TrendingMoviesGallery/TrendingMoviesGallery';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      }
      // finally {
      // }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <TrendingMoviesGallery movies={trendingMovies} />
    </>
  );
};

export default Home;
