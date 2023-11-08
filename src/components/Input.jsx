
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



// Material UI Input Fields //

export default function Input({theLabel, theType, inputHandler, keyHandler, theName, theValue}) {

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '40ch' },
        
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onKeyDown={keyHandler} value={theValue} name={theName} onChange={inputHandler} type={theType}   id="outlined-basic" label={theLabel} variant="outlined" />
    </Box>
  );
}