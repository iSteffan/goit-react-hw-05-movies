import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyword } from 'services/api';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [isFound, setIsFound] = useState(true);

  // const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log('query', query);

  // Оновлюємо стрічку URL
  const updateQueryString = evt => {
    const queryValue = evt.target.value;
    if (queryValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: queryValue });
  };

  const fetchMovieByKeyword = async keyword => {
    try {
      const data = await getMovieByKeyword(keyword);
      console.log('results', data);
      if (data.total_results === 0) {
        setIsFound(false);
        setFoundMovies([]);
      } else {
        setIsFound(true);
        setFoundMovies(data.results);
      }
    } catch (error) {
      console.log(error.message);
    }
    // finally {
    //   setShowLoader(false);
    // }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const key = e.target.elements.query.value;
    fetchMovieByKeyword(key);
  };

  // useEffect(() => {
  //   // setShowLoader(true);
  //   const fetchMovieByKeyword = async keyword => {
  //     try {
  //       const data = await getMovieByKeyword(keyword);
  //       console.log('results', data);
  //       if (data.total_results === 0) {
  //         setIsFound(false);
  //       }
  //       setFoundMovies(data.results);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //     // finally {
  //     //   setShowLoader(false);
  //     // }
  //   };

  //   fetchMovieByKeyword(keyword);
  // }, [keyword]);

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
      {isFound ? (
        <MoviesGallery movies={foundMovies} />
      ) : (
        <p>Sorry, we can't find any movies by this tag</p>
      )}
    </div>
  );
};

export default Movies;
