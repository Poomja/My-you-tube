import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.3rem', bgcolor: '#ebb9b9', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          Made with love by <a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/Poomja">Sudhanva</a>
        </Typography>
      </Box>
  )
}

export default Footer