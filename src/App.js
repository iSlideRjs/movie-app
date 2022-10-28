import { useState } from 'react';

import { Header } from './layout/Header';
import { Footer } from './layout/Footer';
import { Main } from './layout/Main';

function App() {
  const [theme, setTheme] = useState('dark')

  const changeTheme = () => {
    setTheme(
      theme === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  return (
    <>
      <Header
        theme={theme}
        onThemeToggle={changeTheme}
      />
      <Main />
      <Footer />
    </>
  );
}

export default App;
