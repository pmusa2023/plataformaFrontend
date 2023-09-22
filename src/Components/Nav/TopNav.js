import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Logo from '../Logo/Logo';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import CustomAvatar from '../Avatar/Avatar';
import Box from '@mui/material/Box';
export default function TopNav() {
  const theme = useTheme();
  return (
    <AppBar
      style={{ backgroundColor: theme.palette.primary.dark }}
      position="static"
    >
      <Toolbar>
        <IconButton
          size="large"
          color="inherit"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Logo />

        <Box display="flex" gap={4}>
          <Button color="inherit">Login</Button>

          <CustomAvatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            settings={['Account', 'Settings', 'Logout']}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
