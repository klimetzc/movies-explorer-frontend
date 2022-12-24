import React, { useId, useState } from 'react';
import './ProfilePage.scss';

function ProfilePage() {
  const nameId = useId();
  const emailId = useId();
  const [name, setName] = useState('Василий');
  const [email, setEmail] = useState('vasiliy@yandex.ru');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <main className="profile-page">
      <h1 className="profile-page__hello">
        Привет,
        {' '}
        {name}
        !
      </h1>

      <form className="profile-page__form" onSubmit={handleSubmit}>
        <label htmlFor={nameId} className="profile-page__label">
          Имя
          <input type="text" id={nameId} className="profile-page__input" placeholder="Имя" value={name} onInput={((event) => { setName(event.target.value); })} />
        </label>

        <label htmlFor={emailId} className="profile-page__label">
          E-mail
          <input type="text" id={emailId} className="profile-page__input" placeholder="E-mail" value={email} onInput={((event) => { setEmail(event.target.value); })} />
        </label>
        <ul className="profile-page__btns">
          <li>
            <button type="submit" className="profile-page__submit">Редактировать</button>
          </li>
          <li>
            <button type="button" className="profile-page__logout">Выйти из аккаунта</button>
          </li>
        </ul>

      </form>
    </main>
  );
}

export default ProfilePage;
