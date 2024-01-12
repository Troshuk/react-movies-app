import { NavidationBar } from 'components/NavidationBar/NavidationBar';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import css from './App.module.css';
import { HOME_ROUTE, MOVIES_ROUTE, MOVIE_DETAILS_ROUTE } from 'routes/routes';
import { Loader } from 'components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Movies = lazy(() => import('./pages/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails'));

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
            <Route
              path={MOVIE_DETAILS_ROUTE + '/*'}
              element={<MovieDetails />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
