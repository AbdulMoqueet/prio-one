import { Box, Typography } from '@mui/material'
import React from 'react'

const ProgressBar = ({ text, percent, mt }) => {
    return (
        <Box mt={mt} sx={{
            position: "relative",
            background: "#fff",
            height: "50px",
            width: "300px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}>

            <Box sx={{
                position: "absolute",
                background: "#FBF5EA",
                width: `${percent}`,
                height: "100%",
                zIndex: "0",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px"
            }}>

            </Box>

            <Typography sx={{ position: "relative", zIndex: 1, paddingLeft: "20px" }}>{text}</Typography>
            <Typography>{percent}</Typography>

        </Box>

    )
}

export default ProgressBar