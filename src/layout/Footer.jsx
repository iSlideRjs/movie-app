import classNames from 'classnames';

function Footer({ theme }) {
  return (
    <footer
      className={classNames('page-footer', {
        'purple darken-4': theme === 'dark',
        'teal darken-2': theme === 'light',
      })}
    >
      <div className="container footer">
        © {new Date().getFullYear()} Movies
      </div>
    </footer>
  );
}

export { Footer };
