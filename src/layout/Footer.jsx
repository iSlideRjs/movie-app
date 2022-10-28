function Footer() {
  return (
    <footer className="page-footer deep-purple darken-3">
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
