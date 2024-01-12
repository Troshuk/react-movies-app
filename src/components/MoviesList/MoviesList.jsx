import { List } from 'components/List/List';
import { getMovies } from 'services/MoviesDbApi';

export const MoviesList = ({ query }) => (
  <List getMovies={(...args) => getMovies(query, ...args)} params={{ query }} />
);
