import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyword } from 'services/api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isFound, setIsFound] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  // console.log('query', query);

  // Оновлюємо стрічку URL
  const updateQueryString = evt => {
    const queryValue = evt.target.value;
    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
  };

  // Функція пошуку
  const fetchMovieByKeyword = async keyword => {
    setShowLoader(true);
    setFoundMovies([]);

    try {
      const data = await getMovieByKeyword(keyword);
      // console.log('results', data);
      // Перевіряємо чи знайшли щось за ключовим словом
      if (data.total_results === 0) {
        setIsFound(false);
        setFoundMovies([]);
      } else {
        setIsFound(true);
        setFoundMovies(data.results);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setShowLoader(false);
    }
  };

  // Пошук фільмів по сабміту
  const handleSubmit = e => {
    e.preventDefault();

    setKeyword(e.target.elements.query.value);
    const key = e.target.elements.query.value;
    fetchMovieByKeyword(key);
  };

  // запускаємо ефект нового запиту на бекенд при повернені на сторінку пошуку з сторінки деталей про фільм
  useEffect(() => {
    const followFromDetails = location.state?.from ?? '';
    if (followFromDetails !== '') {
      setShowLoader(true);

      const fetchMovieByKeywordAgain = async keyword => {
        try {
          const { results } = await getMovieByKeyword(keyword);
          setFoundMovies(results);
        } catch (error) {
          console.log(error.message);
        } finally {
          setShowLoader(false);
        }
      };

      fetchMovieByKeywordAgain(query);
    }
  }, [keyword, location.state?.from, query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={updateQueryString}
          name="query"
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      {showLoader && <Loader />}

      {isFound ? (
        <MoviesGallery movies={foundMovies} />
      ) : (
        <p>Sorry, we can't find any movies by this tag</p>
      )}
    </div>
  );
};

export default Movies;
