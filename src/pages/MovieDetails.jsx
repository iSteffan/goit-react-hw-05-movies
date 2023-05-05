import { useRef, useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { Wrapper, Image } from './MovieDetails.styled';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  useEffect(() => {
    setShowLoader(true);
    const fetchTrendingMovies = async movieId => {
      try {
        const data = await getMovieById(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setShowLoader(false);
      }
    };

    fetchTrendingMovies(movieId);
  }, [movieId]);

  const { poster_path, original_title, vote_average, overview, genres } =
    movieInfo;

  const userScore = vote_average
    ? `${(vote_average * 10).toFixed(0)}%`
    : "This movie haven't rated yet";

  const posterImg = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

  return (
    <>
      <Link to={backLinkLocationRef.current}>Go back</Link>
      {showLoader && <Loader />}
      <Wrapper>
        <Image src={posterImg} alt={original_title} />
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
      </Wrapper>
    </>
  );
};

export default MovieDetails;
