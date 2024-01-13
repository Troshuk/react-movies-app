import { useEffect, useRef, useState } from 'react';
import {
  Link,
  useLocation,
  useParams,
  useNavigate,
  Outlet,
} from 'react-router-dom';

import { HOME_ROUTE } from 'routes/routes';
import { getMovieDetails, getImage } from 'services/MoviesDbApi';
import { BiArrowBack } from 'react-icons/bi';
import { MOVIE_CAST_ROUTE, MOVIE_REVIEWS_ROUTE } from 'routes/routes';

import css from './Details.module.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Details = () => {
  const location = useLocation();
  const goBackRoute = useRef(location.state?.from ?? HOME_ROUTE);
  const hasMovieLoaded = useRef(false);
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const score = (movie?.vote_average * 10)?.toFixed(0) ?? 0;

  useEffect(() => {
    if (!id || hasMovieLoaded.current) return;

    getMovieDetails(id)
      .then(setMovie)
      .catch(() => navigate(goBackRoute.current))
      .finally(() => hasMovieLoaded.current = true);
  }, [id, navigate]);

  return (
    <div>
      <Link className={css.goBack} to={goBackRoute.current}>
        <BiArrowBack /> Go Back
      </Link>

      {movie && (
        <>
          <div
            className={css.container}
            style={
              movie.backdrop_path && {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8) ,rgba(0, 0, 0, 0.3)), url(${getImage(
                  movie.backdrop_path
                )})`,
              }
            }
          >
            <img
              src={getImage(movie.poster_path, 'w300')}
              alt="poster"
              width={300}
              height={400}
            />

            <div className={css.detailsContainer}>
              <h1>
                {movie.original_title} ({movie.release_date?.slice(0, 4)})
              </h1>

              <h2>User Score:</h2>
              <div style={{ width: 60, height: 60 }}>
                <CircularProgressbar
                  value={score}
                  text={`${score}%`}
                  styles={{
                    text: {
                      fontSize: '32px',
                      fill: '#47bf21',
                    },
                    path: {
                      stroke: `rgba(0,128,0, ${score / 100})`,
                    },
                  }}
                />
              </div>

              <h2>Overview</h2>
              <p className={css.text}>{movie.overview}</p>

              <h3>Genres</h3>
              <p className={css.text}>
                {movie.genres?.map(({ name }) => name)?.join(' | ')}
              </p>
            </div>
          </div>

          <div className={css.additionalContainer}>
            <h2>Additional Information</h2>

            <ul className={css.additionalButtons}>
              <Link to={MOVIE_CAST_ROUTE}>Cast</Link>
              <Link to={MOVIE_REVIEWS_ROUTE}>Reviews</Link>
            </ul>

            {/* Additional information is rendered here */}
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};
