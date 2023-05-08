import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [showLoader, setShowLoader] = useState(false);
  const [isContentDownloaded, setIsContentDownloaded] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    const fetchMovieCast = async movieId => {
      try {
        const { results } = await getMovieReviews(movieId);
        // console.log(results);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setShowLoader(false);
        setIsContentDownloaded(true);
      }
    };

    fetchMovieCast(movieId);
  }, [movieId]);

  return (
    <>
      {showLoader && <Loader />}
      {isContentDownloaded && reviews.length === 0 ? (
        <p>Sorry, there is no review for this movie</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
