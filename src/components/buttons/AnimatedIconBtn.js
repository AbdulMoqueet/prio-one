import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { HiOutlineLockClosed } from 'react-icons/hi'
import { Box, Button, styled } from '@mui/material'

const StyledButton = styled(Button)({
    background: "#F46853",
    "&:hover": { background: "#dc5c49" },
    padding: "20px 30px",
    color: "#fff",
    width: "270px",
    display: "flex",
    borderRadius: "50px",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
    textTransform: "none"
})

const AnimatedIconBtn = ({ iconSize, sx }) => {
    return (
        <StyledButton sx={sx}>
            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap:"10px"
            }}>
                Access Community
                <HiOutlineLockClosed fontSize="18px" />
            </Box>
            {<BsArrowRight className="hero__arrow" style={{ fontSize: iconSize }} />}
        </StyledButton>
    )
}

export default AnimatedIconBtn