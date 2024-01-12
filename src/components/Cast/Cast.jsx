import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast, getImage } from 'services/MoviesDbApi';

import css from './Cast.module.css';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    if (!id) return;

    getMovieCast(id)
      .then(({ cast }) => setCast(cast))
      .catch(console.error);
  }, [id]);

  if (!cast) {
    return <Loader />;
  }

  return cast.length ? (
    <ul className={css.castList}>
      {cast?.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          <img
            src={getImage(profile_path, 'w200')}
            alt="actor"
            width={200}
            height={292}
          />
          <div>
            <h3>{name}</h3>
            <h4>
              Character: <br />
              {character}
            </h4>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>Cast wasn't found for this movie</p>
  );
};

export default Cast;
