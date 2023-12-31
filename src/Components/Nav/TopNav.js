import React, { useState } from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Logo from '../Logo/Logo';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ModalAuth from '../Modal/ModalAuth';
//import CustomAvatar from '../Avatar/Avatar';
import Box from '@mui/material/Box';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerWidth }) => ({
  zIndex: !open ? theme.zIndex.drawer + 1 : theme.zIndex.appBar + 1, // Adjust the z-index based on open state
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginRight: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopNav(props) {
  const [LoginModalOpen, setLoginModalpen] = useState(false);

  const handleModalOpen = () => {
    setLoginModalpen(true);
  };

  const handleModalClose = () => {
    setLoginModalpen(false);
  };
  return (
    <React.Fragment>
      <AppBar
        style={{ backgroundColor: props.backgroundColor }}
        position="fixed"
        open={props.open}
        drawerWidth={props.drawerWidth}
        elevation={0}
      >
        <Toolbar>
          <Logo color={props.color} />

          <Box display="flex" gap={4} color={props.color}>
            <Button
              open={LoginModalOpen}
              handleClose={handleModalClose}
              color="inherit"
              onClick={handleModalOpen}
              variant="outlined"
            >
              Entrar
            </Button>
            <Button color="inherit">Registo</Button>

            {/*<CustomAvatar
            alt="Remy Sharp"
            src="/static/images/avatar/2.jpg"
            settings={['Account', 'Settings', 'Logout']}
        />*/}
          </Box>
          <IconButton
            style={{ color: props.color }}
            edge="start"
            aria-label="open drawer"
            onClick={props.sideBarHandler}
            sx={{
              marginLeft: 5,

              ...(props.open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {LoginModalOpen && (
        <ModalAuth title="Login na App" onClose={handleModalClose} />
      )}
    </React.Fragment>
  );
}
