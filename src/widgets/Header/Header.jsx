/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import classNames from 'classnames';
import logo from '../../shared/assets/icons/logo.svg';
import Drawer from '../../shared/ui/Drawer/Drawer';

function Header({ isLoggedIn }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <nav className="Header">
      <Link to="/" className="Header__logo">
        <img src={logo} alt="Logo" />
      </Link>
      {isLoggedIn ? (
        <>
          <Drawer isOpen={isModalOpen} onClose={closeModal}>
            <nav className="Header__modal-links">
              <NavLink end to="/" className={({ isActive }) => (classNames('Header__modal-link', isActive ? 'Header__modal-link_active' : false))}>Главная</NavLink>
              <NavLink to="/movies" className={({ isActive }) => (classNames('Header__modal-link', isActive ? 'Header__modal-link_active' : false))}>Фильмы</NavLink>
              <NavLink to="/saved-movies" className={({ isActive }) => (classNames('Header__modal-link', isActive ? 'Header__modal-link_active' : false))}>Сохранённые фильмы</NavLink>
            </nav>
            <Link to="/profile" className="Header__acc Header__acc_modal">
              <p className="Header__acc-text">Аккаунт</p>
              <div className="Header__avatar" />
            </Link>

          </Drawer>
          <div className="Header__burger" onClick={openModal} />
          <div className="Header__nav">
            <NavLink to="/movies" className={({ isActive }) => (classNames('Header__navlink', isActive && 'Header__navlink_active'))}>Фильмы</NavLink>
            <NavLink to="/saved-movies" className={({ isActive }) => (classNames('Header__navlink', isActive && 'Header__navlink_active'))}>Сохранённые фильмы</NavLink>
          </div>
          <Link to="/profile" className="Header__acc">
            <p className="Header__acc-text">Аккаунт</p>
            <div className="Header__avatar" />
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup" className="Header__registration">Регистрация</Link>
          <Link to="/signin" className="Header__signin">Войти</Link>
        </>
      )}

    </nav>

  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Header.defaultProps = {
  isLoggedIn: false,
};

export default Header;
