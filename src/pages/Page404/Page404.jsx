import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page404.scss';

function Page404() {
  const navigate = useNavigate();
  return (

    <main className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__error">404</h1>
        <p className="page-not-found__description">Страница не найдена</p>
        <button
          className="page-not-found__button"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Назад

        </button>
      </div>

    </main>
  );
}

export default Page404;
