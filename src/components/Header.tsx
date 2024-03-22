import { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

function Header() {
  const { theme, handleTheme } = useContext(ThemeContext);

  const iconProps = { height: 22, widht: 22, onClick: handleTheme, className: 'theme-icon' };

  const IconTheme =
    theme === 'dark' ? () => <SunIcon {...iconProps} /> : () => <MoonIcon {...iconProps} />;

  return (
    <header>
      <h1>devfinder</h1>
      <IconTheme />
    </header>
  );
}

export default Header;
