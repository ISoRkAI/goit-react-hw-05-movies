import { useState } from 'react';
import { Input } from './SearchMoviesStyled';

export const SearchMovie = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Batman"
        type="text"
        name="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={search}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};
