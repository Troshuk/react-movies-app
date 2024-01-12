import { Link, useLocation } from 'react-router-dom';
import { MOVIE_DETAILS_ROUTE } from 'routes/routes';
import { useEffect, useState } from 'react';

import css from './List.module.css';
import { getImage } from 'services/MoviesDbApi';
import { Loader } from 'components/Loader/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export const List = ({ getMovies, params }) => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [latestQuery, setLatestQuery] = useState('');

  useEffect(() => {
    if (params && !params.query) return;

    if (params?.query?.trim() !== latestQuery) {
      setLatestQuery(params?.query?.trim());
      setPage(1);
      setMovies([]);
      return;
    }

    setLoadMore(false);

    getMovies(page)
      .then(({ results, page, total_pages }) => {
        setMovies(movies => [...movies, ...results]);
        setLoadMore(total_pages > page);
      })
      .catch(console.error);
  }, [params, page, latestQuery, getMovies]);

  return (
    <InfiniteScroll
      dataLength={movies.length}
      next={() => setPage(page => page + 1)}
      hasMore={loadMore}
      loader={<Loader />}
    >
      {movies.length > 0 && (
        <ul className={css.list}>
          {movies?.map(({ id, title, release_date, poster_path }) => (
            <Link
              key={id}
              to={MOVIE_DETAILS_ROUTE.replace(':id', id)}
              state={{ from: location }}
            >
              <img
                src={getImage(poster_path, 'w300')}
                alt="poster"
                width="100%"
              />
              <p>
                {title} ({release_date?.slice(0, 4)})
              </p>
            </Link>
          ))}
        </ul>
      )}
    </InfiniteScroll>
  );
};
