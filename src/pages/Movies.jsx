import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyword } from 'services/api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);

  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';

  //   // useEffect(() => {
  //   // HTTP запрос, если нужно
  //   // }, []);

  const updateQueryString = evt => {
    const movieIdValue = evt.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(e.target.elements.query.value);

    setKeyword(e.target.elements.query.value);
  };

  useEffect(() => {
    // setShowLoader(true);
    const fetchMovieByKeyword = async movieId => {
      try {
        const { results } = await getMovieByKeyword(keyword);
        // console.log('results', results);
        setFoundMovies(results);
        // setMovieInfo(data);
      } catch (error) {
        console.log(error.message);
      }
      // finally {
      //   setShowLoader(false);
      // }
    };

    fetchMovieByKeyword(keyword);
  }, [keyword]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={movieId}
          onChange={updateQueryString}
          name="query"
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {foundMovies.length === 0 ? (
        <p>Sorry, we can't find any movies by tag {keyword}</p>
      ) : (
        <MoviesGallery movies={foundMovies} />
      )}
    </div>
  );
};

export default Movies;
