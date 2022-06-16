import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({text, sx}) => {
    return (
        <Typography sx={sx} color="#1C2B49" fontSize="28px">
            {text}
        </Typography>
    )
}

export default Heading