function Logo({ theme }) {
  return (
    <a
      href="/movie-app/"
      className={theme === 'dark' ? 'logo-dark' : 'logo-light'}
    >
      Movies
    </a>
  );
}

export { Logo };
