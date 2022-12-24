import React from 'react';
import Switch from '../../../shared/ui/Switch/Switch';
import './FilterFilms.scss';

function FilterFilm() {
  return (
    <form action="" className="filter-film">
      <p className="filter-film__label">Короткометражки</p>
      <Switch />
    </form>
  );
}

export default FilterFilm;
