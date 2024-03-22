import { useState } from 'react';

function useGetTheme() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<'dark' | 'light'>(defaultDark ? 'dark' : 'light');

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return { theme, handleTheme };
}

export default useGetTheme;1
