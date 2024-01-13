import { NavidationBar } from 'components/NavidationBar/NavidationBar';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import css from './App.module.css';
import {
  HOME_ROUTE,
  MOVIES_ROUTE,
  MOVIE_CAST_ROUTE,
  MOVIE_DETAILS_ROUTE,
  MOVIE_REVIEWS_ROUTE,
} from 'routes/routes';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <header>
        <NavidationBar />
      </header>

      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path={HOME_ROUTE} element={<Home />} />
            <Route path={MOVIES_ROUTE} element={<Movies />} />
            <Route path={MOVIE_DETAILS_ROUTE} element={<MovieDetails />}>
              <Route path={MOVIE_CAST_ROUTE} element={<Cast />} />
              <Route path={MOVIE_REVIEWS_ROUTE} element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to={HOME_ROUTE} />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
