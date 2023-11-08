
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';


// Basic Sign In Button //

export default function Button2({theHandler, theText}) {

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', marginTop: '1rem' }}>
      <Button onClick={theHandler}>{theText}</Button>
    </Box>
  );
}