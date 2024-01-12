import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [serchParams, setSearchParams] = useSearchParams();
  const query = serchParams.get('query')?.trim() ?? '';

  const handleSumbit = query => {
    if (!query) {
      setSearchParams({});

      return;
    }

    setSearchParams({ query });
  };

  return (
    <div>
      <SearchBar handleSumbit={handleSumbit} query={query} />

      <MoviesList query={query} />
    </div>
  );
};

export default Movies;
