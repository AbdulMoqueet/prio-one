import { Box, Container } from '@mui/material'
import React from 'react'

const BigBox = () => {
    return (
        <Box sx={{
            background: "linear-gradient(to bottom, #1C2B49 70%, #F5DBD2 30%)"
        }}>

            <Container>
                <Box sx={{
                    width: {xs:"100%", md:"800px"}
                }} component='img' src='./big_box.png' />
            </Container>

        </Box>
    )
}

export default BigBox