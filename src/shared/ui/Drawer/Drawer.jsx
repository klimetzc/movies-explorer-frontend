import React, { useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Drawer.scss';

function Drawer({ isOpen, onClose, children }) {
  const handleEscapeClose = (event) => {
    if (!isOpen) return;
    if (event.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeClose);

    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [isOpen]);

  return (
    <div className={classNames('ui-drawer', isOpen && 'ui-drawer_opened')}>
      <div className="ui-drawer__modal">
        <button onClick={onClose} type="button" className="ui-drawer__close-btn" />
        {children}
      </div>
    </div>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

Drawer.defaultProps = {
  isOpen: false,
};

export default Drawer;
