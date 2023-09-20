import React from 'react';
import { Outlet } from 'react-router-dom';
import MainSection from '../Components/UI/MainSection';
import Topnav from '../Components/Nav/TopNav';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
function Root() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <MainSection>
          <Topnav />
          <Outlet />
        </MainSection>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Root;
