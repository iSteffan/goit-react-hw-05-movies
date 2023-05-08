import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/api';
import { Image, List } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // setShowLoader(true);
    const fetchMovieCast = async movieId => {
      try {
        const { cast } = await getMovieCast(movieId);
        // console.log(cast);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setShowLoader(false);
      }
    };

    fetchMovieCast(movieId);
  }, [movieId]);

  return cast.length === 0 ? (
    <p>Sorry, Cast is not available for this movie</p>
  ) : (
    <List>
      {cast.map(actor => (
        <li key={actor.cast_id}>
          {actor.profile_path ? (
            <Image
              src={`https://image.tmdb.org/t/p/w400/${actor.profile_path}`}
              alt={actor.name}
            />
          ) : (
            <Image
              src={
                'https://via.placeholder.com/400x600.png?text=Poster+Not+Available'
              }
              alt={actor.name}
            />
          )}
          <h3>{actor.name}</h3>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </List>
  );
};

export default Cast;
