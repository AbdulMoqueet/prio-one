import React from 'react'

import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import StyledButton from '../buttons/StyledButton'

const Divider = styled(Box)({
    height: "30px",
    background: "#fff",
    width: "1px"
})

const CustomLink = styled(Link)({
    color: "#fff",
    textDecoration: "none",
    "&:hover": {color: "#F46853"}
})

const NavBar = ({linkStyle, buttonStyle, dividerStyle}) => {
  return (
    <Container>

    <Stack pt={5} flexDirection="row" alignItems="center" justifyContent="space-between">

        <Box sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 3
        }}>
            <CustomLink sx={linkStyle} to="/" variant='h6'>Prio.one</CustomLink>
            <CustomLink sx={linkStyle} to="#">Unser Service</CustomLink>
            <Divider sx={dividerStyle} />
            <CustomLink sx={linkStyle} to="/products">Über uns</CustomLink>
            <Divider sx={dividerStyle} />
            <CustomLink sx={linkStyle} to="#">FAQs</CustomLink>
            <Divider sx={dividerStyle} />

            <Box sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px"
            }}>
                <CustomLink sx={linkStyle} to="#" >Mehr</CustomLink>
                <FiChevronDown/>
            </Box>

        </Box>

        <Box sx={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            gap: 3
        }}>
            <Typography variant='p' component="p">Login</Typography>

            <StyledButton text="Los geht’s" sx={buttonStyle} />

        </Box>

    </Stack>

</Container>

  )
}

export default NavBar