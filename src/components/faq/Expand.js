import { Box } from '@mui/material'
import React from 'react'

import {GoPlusSmall} from 'react-icons/go'

const Expand = () => {
  return (
    <Box sx={{
        background: "#F5DBD2BF",
        color: "#C25A3F",
        height: "40px",
        width: "40px",
        fontSize: "34px",
        borderRadius: "50%",
        display: "grid",
        placeItems: "center"
    }}>
        <GoPlusSmall />
    </Box>
  )
}

export default Expand