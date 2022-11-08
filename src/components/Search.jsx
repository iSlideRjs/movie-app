import React, { useState } from 'react';

const Search = (props) => {
  const { searchMovies } = props;
  const { theme } = props;
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type);
    }
  };

  // TODO debounce and throttle
  const handleFilter = (event) => {
    setType(event.target.dataset.type);
    searchMovies(search, event.target.dataset.type);
  };

  return (
    <>
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={search.length === 0 ? undefined : handleKey}
          />
          <button
            disabled={search.length === 0}
            className="btn search-btn"
            onClick={() => searchMovies(search, type)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="rad-btn">
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movies only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series only</span>
          </label>
        </p>
      </div>
    </>
  );
};

export { Search };
