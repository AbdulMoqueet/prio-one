import React from 'react'
import {Button, styled} from '@mui/material'

const MyButton = styled(Button)({
    background: "#F46853",
    "&:hover": { background: "#dc5c49" },
    padding: "15px 60px",
    color: "#fff",
    borderRadius: "50px",
    textTransform: "none"
})

const StyledButton = ({text, sx}) => {
  return (
    <MyButton sx={sx}>{text}</MyButton>
  )
}

export default StyledButton