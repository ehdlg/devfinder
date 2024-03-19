import { useState } from 'react';
import useGetUserInfo from '../hooks/useGetUserInfo';

function Search({ handleSubmit }: { handleSubmit: (e: React.FormEvent) => void }) {
  const [user, setUser] = useState<string>('ehdlg');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username } = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    setUser(username.toString());
  };

  const userInfo = useGetUserInfo(user);

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type='text' name='username' id='username' placeholder='Search github username...' />
      <button type='submit'>Search</button>
    </form>
  );
}

export default Search;
