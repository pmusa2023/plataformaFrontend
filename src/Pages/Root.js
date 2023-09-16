import React from 'react';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
}

export default Root;
