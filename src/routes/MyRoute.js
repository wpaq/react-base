import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

const MyRoute = function({ component: Component, isClosed, ...rest }) {
  const isLoggedId = false;

  if (isClosed && !isLoggedId) {
    return (
      <Redirect
        to={{ pathname: './login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return (
    <Route {...rest} component={Component} />
  )
}

MyRoute.defaultProps = {
  isClosed: false,
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClosed: PropTypes.bool,
}

export default MyRoute;
