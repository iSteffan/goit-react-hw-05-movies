import { NavLink } from 'react-router-dom';
import { Image, List, MovieName } from './TrendingMoviesGallery.styled';

export const TrendingMoviesGallery = ({ movies }) => {
  //   const posterImg = movies.poster_path
  //     ? `https://image.tmdb.org/t/p/w400/${movies.poster_path}`
  //     : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';
  //   const location = useLocation();
  return (
    <List>
      {movies.map(item => (
        <li key={item.id}>
          <NavLink to={`/movies/${item.id}`}>
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
