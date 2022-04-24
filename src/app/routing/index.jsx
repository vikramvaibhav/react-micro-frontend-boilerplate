// node modules
import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// modules
import { Router } from 'modules/Routing';
// components
import Layout from '../layout';
import Home from '../pages/Home';
// routes
import { routes } from './routes';


const Routing = () => {

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            {routes.map(({ path, component }) => (
              <Route key={path} path={path} element={component} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default memo(Routing);
