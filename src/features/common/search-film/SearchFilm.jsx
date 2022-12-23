import React from 'react';
import './SearchFilm.scss';

function SearchFilm() {
  return (
    <form action="" className="search-film">
      <input placeholder="Фильм" type="text" className="search-film__input" />
      <button type="button" className="search-film__button">Найти</button>
    </form>
  );
}

export default SearchFilm;
