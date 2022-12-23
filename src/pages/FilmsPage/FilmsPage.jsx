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
    <main className="saved-films">
      <section className="saved-films__actions">
        <SearchFilm />
        <FilterFilm />
      </section>
      <ul className="saved-films__films">
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
        <Film.Card />
      </ul>
      <form action="" className="saved-films__more">
        <ShowMore />
      </form>

    </main>

  );
}

export default FilmsPage;
