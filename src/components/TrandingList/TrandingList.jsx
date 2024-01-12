// import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/MoviesDbApi';
import { List } from '../List/List';

import css from './TrandingList.module.css';

export const TrandingList = () => {
  // const [movies, setMovies] = useState(null);

  // useEffect(() => {
  //   getTrendingMovies()
  //     .then(({ results }) => setMovies(results))
  //     .catch(console.error);
  // }, []);

  return (
    <>
      <h1 className={css.title}>Tranding today</h1>
      <List getMovies={getTrendingMovies} />
    </>
  );
};
