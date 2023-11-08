
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';



// Disabled Material UI Button //

export default function Button3({theText, theHandler}) {

  return (
    <Stack sx={{marginTop: '1rem'}} direction="row" spacing={2}>
      <Button sx={{textTransform: 'none', height: '2.5rem'}} onClick={theHandler} variant="contained" disabled>
        {theText}
      </Button>
    </Stack>
  );
}