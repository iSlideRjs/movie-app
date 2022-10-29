import { useState } from 'react';
import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';

function App() {
  const [theme, setTheme] = useState('dark');

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={theme === 'dark' ? 'app-dark' : 'app-light'}>
      <Header theme={theme} onThemeToggle={changeTheme} />
      <Main theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
