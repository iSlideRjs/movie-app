function Footer({ theme }) {
  return (
    <footer
      className={
        theme === 'dark'
          ? 'page-footer grey darken-4'
          : 'page-footer teal darken-2'
      }
    >
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Movies App
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
