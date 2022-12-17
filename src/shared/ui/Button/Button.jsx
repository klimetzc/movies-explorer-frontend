import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children }) {
  return (
    <button className="ui-button" type="button">{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
