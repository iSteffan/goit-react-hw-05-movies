import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
// import { Image, List } from './Cast.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    // setShowLoader(true);
    const fetchMovieCast = async movieId => {
      try {
        const { results } = await getMovieReviews(movieId);
        // console.log(results);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      }
      // finally {
      //   // setShowLoader(false);
      // }
    };

    fetchMovieCast(movieId);
  }, [movieId]);

  return reviews.length === 0 ? (
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
  );
};

export default Reviews;
// return ({
//   reviews.length === 0 ?
//     (<p>no review</p>)
//     :
//     (<ul>
//     {reviews.map(review => (
//       <li key={review.id}>
//         <h3>Author: {review.author}</h3>
//         <p>{review.content}</p>
//       </li>
//     ))}
//   </ul>)}
// );
