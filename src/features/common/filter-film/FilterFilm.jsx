import React from 'react';
import Switch from '../../../shared/ui/Switch/Switch';
import './FilterFilms.scss';

function FilterFilm() {
  return (
    <div className="filter-film">
      <p className="filter-film__label">Короткометражки</p>
      <Switch />
    </div>
  );
}

export default FilterFilm;
