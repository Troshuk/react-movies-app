import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const query = serchParams.get('query')?.trim() ?? '';

  const handleSumbit = newQuery => {
    if (!newQuery) {
      setSearchParams({});

      return;
    }

    if (query === newQuery) return;

    setSearchParams({ query: newQuery });
  };

  return (
    <div>
      <SearchBar handleSumbit={handleSumbit} query={query} />

      <MoviesList query={query} />
    </div>
  );
};

export default Movies;
