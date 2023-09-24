import TopNav from './TopNav';
import SideBar from './SideBar';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
function Nav() {
  const [open, setOpen] = useState(false);
  const drawerWidth = 240;
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <TopNav
        drawerWidth={drawerWidth}
        open={open}
        sideBarHandler={handleDrawerOpen}
        backgroundColor={theme.palette.primary.main}
        color={theme.palette.primary.white}
      />
      <SideBar
        drawerWidth={drawerWidth}
        open={open}
        sideBarHandler={handleDrawerClose}
        backgroundColor={theme.palette.primary.main}
        color={theme.palette.primary.white}
      />
    </Box>
  );
}

export default Nav;
