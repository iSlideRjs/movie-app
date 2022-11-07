function Footer({ theme }) {
  return (
    <footer
      className={
        theme === 'dark'
          ? 'page-footer purple darken-4'
          : 'page-footer teal darken-2'
      }
    >
      <div className="container footer">
        © {new Date().getFullYear()} Movies
      </div>
    </footer>
  );
}

export { Footer };
