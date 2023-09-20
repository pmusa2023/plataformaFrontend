import * as React from 'react';

import Box from '@mui/material/Box';

export default function MainSection(props) {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>{props.children}</Box>
    </React.Fragment>
  );
}
