import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({
  isLogged,
  component: Component,
  ...rest
}) => {
  
  
  return (
  <Route { ...rest }

    component={ (props) => (
      ( !isLogged )
        ? ( <Component { ...props } /> )
        : ( <Redirect to='/' /> )
    )}

  />);
};

export default PublicRoute;


