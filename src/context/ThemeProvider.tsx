import { PropsWithChildren, useEffect, useState } from 'react';
import { ThemeContext } from './themeContext';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<'light' | 'dark'>(isDark ? 'dark' : 'light');

  useEffect(() => {
    const htmlElement = document.documentElement;

    htmlElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  return <ThemeContext.Provider value={{ theme, handleTheme }}>{children}</ThemeContext.Provider>;
};
