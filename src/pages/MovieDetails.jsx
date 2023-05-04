import { useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';

// 1. http://localhost:3000/dogs?dogId=2
// 2. http://localhost:3000/dogs/dog-2
// 3. const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
// 4. http://localhost:3000/dogs/dog-2/gallery
// 5. backLinkLocationRef не меняется и все еще ведет на http://localhost:3000/dogs?dogId=2

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return (
    <>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Назад к странице коллекции</Link>
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
