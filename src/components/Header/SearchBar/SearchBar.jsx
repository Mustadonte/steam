import { SearchInput } from './SearchBar.styled';
import { useState } from 'react';
import { fetchGames } from 'Redux/apps-operations';
import { useDispatch } from 'react-redux';

export const SearchBar = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchGames(search));
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchInput
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Enter an app name..."
      />
      ;
    </form>
  );
};
