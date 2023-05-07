import { NavLink, useLocation } from 'react-router-dom';
import { Image, List, MovieName } from './MoviesGallery.styled';

export const MoviesGallery = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(item => (
        <li key={item.id}>
          <NavLink to={`/movies/${item.id}`} state={{ from: location }}>
            {item.backdrop_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
                alt={item.original_title}
              />
            ) : (
              <Image
                src={
                  'https://via.placeholder.com/400x600.png?text=Poster+Not+Available'
                }
                alt={item.original_title}
              />
            )}
            <MovieName>{item.original_title}</MovieName>
          </NavLink>
        </li>
      ))}
    </List>
  );
};
