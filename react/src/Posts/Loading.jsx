import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box  mt={10} sx={{ height:'100dvh'}}>
      <Box sx={{ display:"flex" , justifyContent:"center"  }}>
        <CircularProgress size="8rem" />
      </Box>
    </Box>
  );
}