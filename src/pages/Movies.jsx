import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyword } from 'services/api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [keyword, setKeyword] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [isFound, setIsFound] = useState(true);
  // const btnRef = useRef();

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
    const fetchMovieByKeyword = async keyword => {
      try {
        const data = await getMovieByKeyword(keyword);
        console.log('results', data);
        if (data.total_results === 0) {
          setIsFound(false);
        }
        setFoundMovies(data.results);
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
      {isFound ? (
        <MoviesGallery movies={foundMovies} />
      ) : (
        <p>Sorry, we can't find any movies by tag {keyword}</p>
      )}
    </div>
  );
};

export default Movies;
