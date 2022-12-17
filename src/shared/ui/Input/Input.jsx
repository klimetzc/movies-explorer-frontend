import React, { useId } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';
import classNames from 'classnames';

function Input({ label, errorMessage, type }) {
  const id = useId();
  return (
    <>
      {
        label
          ? <label htmlFor={id} className="ui-input__label">{label}</label>
          : null
      }
      <input className={classNames('ui-input', errorMessage && 'ui-input__error')} id={id} type={type} />
      <p className={classNames('ui-input__error-message', errorMessage && 'ui-input__error-visible')}>{errorMessage}</p>

    </>
  );
}

Input.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  type: PropTypes.string,
};

Input.defaultProps = {
  label: null,
  errorMessage: '',
  type: 'text',
};

export default Input;
