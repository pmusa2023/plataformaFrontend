import React, { useRef, useContext } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import ModalLayout from '../UI/ModalLayout';
import AuthContext from '../../store/auth-context';
import useHttpRequest from '../../hooks/use-httprequest';
import DialogContentText from '@mui/material/DialogContentText';
export default function ModalAuth(props) {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const authCtx = useContext(AuthContext);
  const { sendRequest, updateState } = useHttpRequest();

  async function submitHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const data = await sendRequest(
        'http://localhost:3000/api/login',
        'POST',
        { email, password }
      );

      const token = data.access;
      authCtx.onLogin(token);
    } catch (err) {
      updateState({
        error: err.message,
      });
    }
  }
  return (
    <ModalLayout title={props.title} onClose={props.onClose}>
      <DialogContentText> Insira o Username e Password </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        id="username"
        label="Username"
        ref={emailRef}
        type="text"
        fullWidth
      />
      <TextField
        margin="dense"
        id="password"
        label="Password"
        type="password"
        ref={passwordRef}
        fullWidth
      />
      <DialogActions>
        <Button onClick={submitHandler}>Entrar</Button>
        <Button onClick={props.onClose}>Cancelar</Button>
      </DialogActions>
    </ModalLayout>
  );
}
