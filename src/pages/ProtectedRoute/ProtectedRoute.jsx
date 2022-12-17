import React from 'react';
import { Outlet } from 'react-router';
import PropTypes from 'prop-types';
import Forbidden from '../Forbidden/Forbidden';

function ProtectedRoute({ isLoggedIn }) {
  return (
    isLoggedIn ? <Outlet /> : <Forbidden />
  );
}

ProtectedRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
  isLoggedIn: false,
};

export default ProtectedRoute;
