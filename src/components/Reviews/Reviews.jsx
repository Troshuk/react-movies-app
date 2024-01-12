import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/MoviesDbApi';

import css from './Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    if (!id) return;

    getMovieReviews(id)
      .then(({ results }) => setReviews(results))
      .catch(console.error);
  }, [id]);

  if (!reviews) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      {reviews?.length ? (
        <ul className={css.list}>
          {reviews?.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;
