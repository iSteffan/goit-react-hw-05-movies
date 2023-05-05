import { useRef, useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

// 1. http://localhost:3000/dogs?dogId=2
// 2. http://localhost:3000/dogs/dog-2
// 3. const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
// 4. http://localhost:3000/dogs/dog-2/gallery
// 5. backLinkLocationRef не меняется и все еще ведет на http://localhost:3000/dogs?dogId=2

const API_KEY = '8776cc9f66dd32d7c5ecc9b66eb74c99';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
    )
      .then(resp => resp.json())
      .then(response => {
        console.log(response);
        setMovieInfo(response);
      })

      .catch(error => console.error(error));
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieInfo;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : "This movie haven't rated yet";
  // https://image.tmdb.org/t/p/original/

  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
      <div>
        <img src={posterUrl} alt={original_title} />
        <div>
          <h2>{original_title}</h2>
          <p>User Score: {userScore}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres &&
              genres.length > 0 &&
              genres.map(genre => genre.name).join(', ')}
          </p>
        </div>
      </div>

      {/* <ul>
        <li>
          <Link to="subbreeds">Подподроды</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul> */}
    </>
  );
};

export default MovieDetails;
