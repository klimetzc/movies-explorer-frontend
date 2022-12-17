import React from 'react';
import './Form.scss';
import { Link } from 'react-router-dom';
import Input from '../../../../shared/ui/Input/Input';
import Button from '../../../../shared/ui/Button/Button';

export function Form() {
  return (
    <>
      <Link to="/" className="signin-form__logo" />
      <h1 className="signin-form__header">Рады видеть!</h1>
      <form action="" className="signup-form">
        <Input label="E-mail" />
        <Input label="Пароль" errorMessage="Что-то пошло не так" type="password" />
        <Button>Зарегистрироваться</Button>
      </form>
      <p className="signin-form__already">
        Еше не зарегистрированы?
        {' '}
        <Link to="/signup" className="signup-form__link">Регистрация</Link>
      </p>
    </>

  );
}
