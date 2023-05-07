import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';
import { Title } from './Home.styled';

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
      <Title>Trending today</Title>
      {showLoader && <Loader />}
      {isContentDownloaded && <MoviesGallery movies={trendingMovies} />}
    </>
  );
};

export default Home;
