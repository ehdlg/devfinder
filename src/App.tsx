import Header from './components/Header';
import { useState } from 'react';
import './App.css';
import Search from './components/Search';

function App() {
  const [user, setUser] = useState<string>('ehdlg');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { username } = Object.fromEntries(new FormData(e.target as HTMLFormElement));

    setUser(username.toString());
  };

  return (
    <main>
      <Header />
      <Search handleSubmit={handleSubmit} />
      <section id='content'>Content</section>
    </main>
  );
}

export default App;
