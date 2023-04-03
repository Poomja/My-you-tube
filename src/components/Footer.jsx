import React from 'react'
import {Box, Typography} from "@mui/material";

const Footer = () => {
  return (
      <Box sx={{ mt: 'auto', p: '0.3rem', bgcolor: '#f5d7d7', zIndex:1201 }}>
        <Typography sx={{ textAlign: 'center', verticalAlign: 'middle' }}>
          Made with love by <a style={{textDecoration: 'none'}} target="_blank" href="https://github.com/Poomja">POOJA</a>
        </Typography>
      </Box>
  )
}

export default Footer
