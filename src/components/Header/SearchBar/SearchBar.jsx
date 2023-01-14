import { SearchInput } from './SearchBar.styled';
import { useState } from 'react';
import { fetchGames } from 'Redux/apps/apps-operations';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search')
    ? searchParams.get('search')
    : '';
  const [query, setQuery] = useState({
    search: initialSearch,
    page: 1,
  });
  const dispatch = useDispatch();
  const handleChange = e => {
    const { value } = e.target;
    setQuery({
      search: value,
      page: 1,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.search) {
      setSearchParams();
      window.location.reload();
      return;
    }

    dispatch(fetchGames(query));
    navigate('/result');
    setSearchParams({
      search: query.search,
      page: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        value={query.search}
        onChange={handleChange}
        placeholder="Enter an app name..."
      />
    </form>
  );
};
