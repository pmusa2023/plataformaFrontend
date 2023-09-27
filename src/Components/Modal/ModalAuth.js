import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import ModalLayout from '../UI/ModalLayout';
import DialogContentText from '@mui/material/DialogContentText';
export default function ModalAuth(props) {
  return (
    <ModalLayout title={props.title} onClose={props.onClose}>
      <DialogContentText> Insira o Username e Password </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="username"
        label="Username"
        type="text"
        fullWidth
      />
      <TextField
        margin="dense"
        id="password"
        label="Password"
        type="password"
        fullWidth
      />
      <DialogActions>
        <Button>Entrar</Button>
        <Button onClick={props.onClose}>Cancelar</Button>
      </DialogActions>
    </ModalLayout>
  );
}
