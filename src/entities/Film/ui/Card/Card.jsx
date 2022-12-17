import React from 'react';
import './Card.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import mockImage from '../../../../shared/assets/mock-film.png';

export function Card({ isInProfile }) {
  return (
    <div className="entity-film">
      <div className="entity-film__header">
        <div className="entity-film__text">
          <h2 className="entity-film__title">33 слова о дизайне</h2>
          <p className="entity-film__time">1ч 40м</p>
        </div>
        {
          isInProfile
            ? <button className={classNames('entity-film__remove')} type="button" />
            : <button className={classNames('entity-film__like', Math.random() > 0.5 && 'entity-film__like_active')} type="button" />
        }
      </div>
      <img src={mockImage} alt="#" className="entity-film__image" />
    </div>
  );
}

Card.propTypes = {
  isInProfile: PropTypes.bool,
};

Card.defaultProps = {
  isInProfile: false,
};
