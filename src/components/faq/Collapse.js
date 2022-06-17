import { Box } from '@mui/material'
import React from 'react'

import {HiOutlineMinus} from 'react-icons/hi'

const Collapse = () => {
  return (
    <Box sx={{
        background: "#F5DBD2BF",
        color: "#C25A3F",
        height: "40px",
        width: "40px",
        fontSize: "20px",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center"
    }}>
        <HiOutlineMinus />
    </Box>
  )
}

export default Collapse