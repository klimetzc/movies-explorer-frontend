import React from 'react';
import SearchFilm from '../../features/common/search-film/SearchFilm';
import FilterFilm from '../../features/common/filter-film/FilterFilm';
import { Film } from '../../entities/Film';
import './SavedMoviesPage.scss';

function SavedMoviesPage() {
  return (
    <main className="saved-movies-page">
      <section action="" className="saved-movies-page__actions">
        <SearchFilm />
        <FilterFilm />
      </section>
      <ul className="saved-movies-page__films">
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
        <Film.Card isInProfile />
      </ul>
    </main>
  );
}

export default SavedMoviesPage;
