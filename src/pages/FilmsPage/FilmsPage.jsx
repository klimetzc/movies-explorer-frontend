import React, { useEffect } from 'react';
import { Film } from '../../entities/Film';
import FilterFilm from '../../features/common/filter-film/FilterFilm';
import SearchFilm from '../../features/common/search-film/SearchFilm';
import ShowMore from '../../features/common/show-more/ShowMore';
import './FilmsPage.scss';

function FilmsPage() {
  useEffect(() => {
    document.title = 'Сохранённые фильмы';
  }, []);
  return (
    <div className="saved-films">
      <div className="saved-films__actions">
        <SearchFilm />
        <FilterFilm />
      </div>
      <div className="saved-films__films">
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
      </div>
      <div className="saved-films__more">
        <ShowMore />
      </div>

    </div>

  );
}

export default FilmsPage;
