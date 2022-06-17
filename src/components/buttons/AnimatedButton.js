import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import {Button, styled} from '@mui/material'

const StyledButton = styled(Button)({
    background: "#F46853",
    "&:hover": { background: "#dc5c49" },
    padding: "15px 30px",
    color: "#fff",
    width: "270px",
    display: "flex",
    borderRadius: "50px",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "40px",
    textTransform: "none"
})

const AnimatedButton = ({text, iconSize, sx}) => {
  return (
    <StyledButton sx={sx}>
        {text}
        {<BsArrowRight className="hero__arrow" style={{fontSize: iconSize}} />}
    </StyledButton>
  )
}

export default AnimatedButton