/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useId } from 'react';
import './Switch.scss';

function Switch() {
  const switchId = useId();
  return (
    <>
      <input type="checkbox" name="switch" id={switchId} className="ui-switch-checkbox" />
      <label htmlFor={switchId} className="ui-switch-label" />
    </>

  );
}

export default Switch;
