import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { TrendingMoviesGallery } from 'components/TrendingMoviesGallery/TrendingMoviesGallery';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);
  const [isContentDownloaded, setIsContentDownloaded] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    const fetchTrendingMovies = async () => {
      try {
        const { results } = await getTrendingMovies();
        setTrendingMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setShowLoader(false);
        setIsContentDownloaded(true);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {showLoader && <Loader />}
      {isContentDownloaded && <TrendingMoviesGallery movies={trendingMovies} />}
    </>
  );
};

export default Home;
