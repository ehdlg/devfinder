import { Search as SearchIcon } from 'iconoir-react';
function Search({ handleSubmit }: { handleSubmit: (e: React.FormEvent) => void }) {
  return (
    <form className='search-form' onSubmit={(e) => handleSubmit(e)}>
      <SearchIcon />
      <input
        className='search-input'
        type='text'
        name='username'
        id='username'
        placeholder='Search github username...'
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  );
}

export default Search;
