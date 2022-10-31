import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => (
          <Movie key={movie.imdbID} {...movie} /> //можно перечеслить вручную значения или предоператор отправляет все ключи
        ))
      ) : (
        <h4
          className={
            props.theme === 'dark' ? 'not-found-dark' : 'not-found-light'
          }
        >
          Movies not found
        </h4>
      )}
    </div>
  );
}
export { Movies };
