import Header from './components/Header';
import { useState } from 'react';
import { toast } from 'sonner';
import './App.css';
import UserInfo from './components/UserInfo';
import Search from './components/Search';

function App() {
  const [user, setUser] = useState<string>('octocat');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username } = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    if (username.toString().length === 0) return toast.error('The username must not be empty');

    setUser(username.toString());
  };

  return (
    <main>
      <Header />
      <Search handleSubmit={handleSubmit} />
      <UserInfo user={user} />
    </main>
  );
}

export default App;
