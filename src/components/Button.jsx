
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


// Basic Material Ui Button //

export default function BasicButtons({text}) {

  return (
    <Stack spacing={2} direction="row">
      <Button sx={{textTransform: 'none'}} onClick={() => alert('Button Pressed')} variant="text">{text}</Button>
      
    </Stack>
  );
}