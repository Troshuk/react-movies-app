import { BiSearchAlt } from 'react-icons/bi';

import css from './SearchBar.module.css';

export const SearchBar = ({ handleSumbit, query }) => {
  const onSumbit = e => {
    e.preventDefault();

    handleSumbit(e.currentTarget.elements.query.value.trim());
  };

  return (
    <form onSubmit={onSumbit} className={css.search}>
      <input
        type="text"
        name="query"
        defaultValue={query}
        placeholder="Search by movie name..."
      />
      <button type="submit">
        Search <BiSearchAlt />
      </button>
    </form>
  );
};
