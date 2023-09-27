import React from 'react';
import ReactDOM from 'react-dom';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function ModalLayout(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Dialog
          PaperProps={{
            sx: {
              width: '50%', // Adjust the width as needed (e.g., '80%')
              maxWidth: '600px', // Prevent maxWidth constraints
            },
          }}
          open={true}
          onClose={props.handleClose}
        >
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>{props.children}</DialogContent>
        </Dialog>,
        document.getElementById('modal-root')
      )}
    </React.Fragment>
  );
}

export default ModalLayout;
