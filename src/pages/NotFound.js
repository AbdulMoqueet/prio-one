import { Box, Typography } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box sx={{
        height: "80vh",
        display: "grid",
        placeItems: "center"
    }}>
        <Typography variant='h2'>404 Not Found</Typography>
    </Box>
  )
}

export default NotFound