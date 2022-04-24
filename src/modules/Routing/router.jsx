import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Router = ({ children }) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

export default Router;
