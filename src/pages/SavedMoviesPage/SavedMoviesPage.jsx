import React from 'react';
import SearchFilm from '../../features/common/search-film/SearchFilm';
import FilterFilm from '../../features/common/filter-film/FilterFilm';
import { Film } from '../../entities/Film';
import './SavedMoviesPage.scss';

function SavedMoviesPage() {
  return (
    <div className="saved-movies-page">
      <div className="saved-movies-page__actions">
        <SearchFilm />
        <FilterFilm />
      </div>
      <div className="saved-movies-page__films">
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
      </div>
    </div>
  );
}

export default SavedMoviesPage;
