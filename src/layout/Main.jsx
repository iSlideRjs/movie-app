import { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';
import classNames from 'classnames';

const API_KEY = process.env.REACT_APP_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (str, type = 'all') => {
    setLoading(true);

    new Promise((resolve, reject) => {
      let isTimeoutFinished = false;
      let result = null;
      setTimeout(() => {
        isTimeoutFinished = true;
        if (result) {
          resolve(result);
        }
      }, 500);
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      )
        .then((response) => response.json())

        .then((data) => {
          if (data.Response === 'False') {
            reject();
            return;
          }
          if (isTimeoutFinished) {
            resolve(data.Search);
          } else {
            result = data.Search;
          }
        })
        .catch(() => {
          reject();
        });
    })
      .then((newMovies) => {
        setMovies(newMovies);
        setLoading(false);
      })
      .catch(() => {
        setMovies([]);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchMovies('avengers');
  }, []);

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      <div
        className={classNames('hideable', {
          hidden: loading === false,
        })}
      >
        <Preloader />
      </div>

      <div
        className={classNames('hideable', {
          hidden: loading,
        })}
      >
        <Movies movies={movies} />
      </div>
    </main>
  );
}
export { Main };
