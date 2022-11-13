import { useState } from 'react';
import { Header } from './layout/Header';
import { Main } from './layout/Main';
import classNames from 'classnames';

function App() {
  // TODO connect redux and store this value there
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div
      className={classNames('app', {
        'app-dark': theme === 'dark',
        'app-light': theme === 'light',
      })}
    >
      <Header theme={theme} onThemeToggle={changeTheme} />
      <Main />
    </div>
  );
}

export default App;
