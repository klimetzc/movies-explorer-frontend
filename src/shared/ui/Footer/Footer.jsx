import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <footer className="Footer">
      <h3 className="Footer__title">Учебный проект Яндекс.Практикум x BeatFilm</h3>
      <div className="Footer__info">
        <p className="Footer__copy">&copy;2022</p>
        <a href="#pract" className="Footer__link">Яндекс.Практикум</a>
        <a href="https://github.com/klimetzc" className="Footer__link">Github</a>
      </div>
    </footer>
  );
}

export default Footer;
