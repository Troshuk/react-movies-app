import { NavLink } from 'react-router-dom';

import css from './NavidationBar.module.css';
import { HOME_ROUTE, MOVIES_ROUTE } from 'routes/routes';

export const NavidationBar = () => {
  return (
    <nav className={css.list}>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <NavLink to={MOVIES_ROUTE} end>
        Movies
      </NavLink>
    </nav>
  );
};
