/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../shared/ui/Button/Button';
import Input from '../../../../shared/ui/Input/Input';
import './Form.scss';

export function Form() {
  return (
    <section className="signup-form">
      <Link to="/" className="signup-form__logo" />
      <h1 className="signup-form__header">Добро пожаловать!</h1>
      <form action="">
        <Input label="Имя" />
        <Input label="E-mail" />
        <Input label="Пароль" errorMessage="Что-то пошло не так" type="password" />
        <Button>Зарегистрироваться</Button>
      </form>
      <p className="signup-form__already">
        Уже зарегистрированы?
        {' '}
        <Link to="/signin" className="signup-form__link">Войти</Link>
      </p>
    </section>

  );
}
