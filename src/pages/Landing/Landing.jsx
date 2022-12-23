import React, { useEffect } from 'react';
import './Landing.scss';

function Landing() {
  useEffect(() => {
    document.title = 'Диплом';
  }, []);
  return (
    <>
      {/* <Header isLanding /> */}
      <main className="Landing">
        <section className="Landing-intro">
          <h1 className="Landing-intro__title">Учебный проект студента факультета веб-разработки.</h1>
          <ul className="Landing-intro__badges">
            <a href="#Landing__about" className="Landing-intro__badge">О проекте</a>
            <a href="#Landing__stack" className="Landing-intro__badge">Технологии</a>
            <a href="#Landing__student" className="Landing-intro__badge">Студент</a>
          </ul>
        </section>

        <section className="Landing-about" id="Landing__about">
          <h2 className="Landing-about__title Landing__title">О проекте</h2>
          <div className="Landing-about__description">
            <div className="Landing-about__description-column">
              <h3 className="Landing-about__column-header">Дипломный проект включал 5 этапов</h3>
              <p className="Landing-about__column-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className="Landing-about__description-column">
              <h3 className="Landing-about__column-header">На выполнение диплома ушло 5 недель</h3>
              <p className="Landing-about__column-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
          <div className="Landing-about__progress-bar">
            <div className="Landing-about__progress-week1">
              <div className="Landing-about__progress-percent">1 неделя</div>
              <div className="Landing-about__progress-description">Back-end</div>
            </div>
            <div className="Landing-about__progress-week4">
              <div className="Landing-about__progress-percent">4 недели</div>
              <div className="Landing-about__progress-description">Front-end</div>
            </div>
          </div>
        </section>

        <section className="Landing-stack" id="Landing__stack">
          <h2 className="Landing-stack__title Landing__title">Технологии</h2>
          <h3 className="Landing-stack__description-title">7 технологий</h3>
          <p className="Landing-stack__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <ul className="Landing-stack__badges">
            <div className="Landing-stack__badge">HTML</div>
            <div className="Landing-stack__badge">CSS</div>
            <div className="Landing-stack__badge">JS</div>
            <div className="Landing-stack__badge">React</div>
            <div className="Landing-stack__badge">Git</div>
            <div className="Landing-stack__badge">Express.js</div>
            <div className="Landing-stack__badge">mongoDB</div>
          </ul>
        </section>

        <section className="Landing-student" id="Landing__student">
          <h2 className="Landing__title Landing-student__title">Студент</h2>
          <div className="Landing-student__profile">
            <div className="Landing-student__profile-text">
              <h3 className="Landing-student__name">Максим</h3>
              <p className="Landing-student__profession">Frontend разработчик</p>
              <p className="Landing-student__description">Я родился и живу в Мурманске. Учился в МАГУ на направлении &quot;Прикладная математика и информатика&quot;. После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
              <a href="https://github.com/klimetzc" target="_blank" className="Landing-student__github" rel="noreferrer">Github</a>
            </div>

            <div className="Landing-student__avatar" />
          </div>
          <div className="Landing-student__portfolio">
            <p className="Landing-student__portfolio-title">Портфолио</p>
            <a href="https://github.com/klimetzc/russian-travel" target="_blank" className="Landing-student__portfolio-link" rel="noreferrer">
              <span>Статичный сайт</span>
              <span>↗</span>
            </a>
            <a href="https://github.com/klimetzc/lyubimovka" target="_blank" className="Landing-student__portfolio-link" rel="noreferrer">
              <span>Адаптивный сайт</span>
              <span>↗</span>
            </a>
            <a href="https://github.com/klimetzc/watermelons" target="_blank" className="Landing-student__portfolio-link" rel="noreferrer">
              <span>Одностраничное приложение</span>
              <span>↗</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Landing;
