import React from 'react';
import { Outlet } from 'react-router-dom';
import MainSection from '../Components/UI/MainSection';
import Nav from '../Components/Nav/Nav';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
function Root() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainSection>
          <Nav />
          <Outlet />
        </MainSection>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Root;
