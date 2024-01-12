import { Suspense, lazy, useEffect, useState } from 'react';
import {
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';

import { HOME_ROUTE, MOVIE_DETAILS_ROUTE } from 'routes/routes';
import { getMovieDetails, getImage } from 'services/MoviesDbApi';
import { BiArrowBack } from 'react-icons/bi';
import { MOVIE_CAST_ROUTE, MOVIE_REVIEWS_ROUTE } from 'routes/routes';

import css from './Details.module.css';
import { Loader } from 'components/Loader/Loader';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const Details = () => {
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const score = (movie?.vote_average * 10)?.toFixed(0) ?? 0;
  const goBackRoute = location.state?.from ?? HOME_ROUTE;
  const currentRoute = MOVIE_DETAILS_ROUTE.replace(':id', id);

  useEffect(() => {
    if (!id) return;

    getMovieDetails(id)
      .then(setMovie)
      .catch(() => navigate(goBackRoute));
  }, [id, navigate, goBackRoute]);

  return (
    <div>
      <Link className={css.goBack} to={goBackRoute}>
        <BiArrowBack /> Go Back
      </Link>

      {movie && (
        <>
          <div
            className={css.container}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8) ,rgba(0, 0, 0, 0.3)), url(${getImage(
                movie.backdrop_path
              )})`,
            }}
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

            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path={MOVIE_CAST_ROUTE} element={<Cast />} />
                <Route path={MOVIE_REVIEWS_ROUTE} element={<Reviews />} />
                <Route
                  path={MOVIE_CAST_ROUTE + '/*'}
                  element={<Navigate to={currentRoute} />}
                />
                <Route
                  path={MOVIE_REVIEWS_ROUTE + '/*'}
                  element={<Navigate to={currentRoute} />}
                />
                <Route
                  path={'/*'}
                  element={
                    location.pathname !== currentRoute && (
                      <Navigate to={currentRoute} />
                    )
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </>
      )}
    </div>
  );
};
