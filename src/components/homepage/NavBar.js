import React, { useState } from 'react'

import { Box, Container, Stack, styled, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { AiOutlineMenu } from 'react-icons/ai'
import { GrClose } from 'react-icons/gr'
import StyledButton from '../buttons/StyledButton'

const Divider = styled(Box)({
    height: "30px",
    background: "#fff",
    width: "1px"
})

const CustomLink = styled(Link)({
    position: "relative",
    zIndex: 10,
    color: "#fff",
    textDecoration: "none",
    "&:hover": { color: "#F46853" }
})

const HeadingLink = styled(Link)({
    color: "#fff",
    textDecoration: "none",
    fontSize: "24px",
    "&:hover": { color: "#F46853" }
})

const NavBar = ({ linkStyle, buttonStyle, dividerStyle, mobileStyle }) => {

    const [navOpen, setNavOpen] = useState(false)

    const openNav = () => {
        setNavOpen(true)
        document.body.style.overflowY = 'hidden'
    }

    const closeNav = () => {
        setNavOpen(false)
        document.body.style.overflowY = 'auto'
        window.scrollTo(0, 0)
    }

    return (
        <Container>

            {/* Mobile */}
            <Stack display={{ xs: "flex", md: "none" }} sx={mobileStyle} pt={5} flexDirection="row" alignItems="center" justifyContent="space-between">

                <AiOutlineMenu fontSize="26px" onClick={openNav} />

                <CustomLink sx={linkStyle} to="/" variant='h6'>Prio.one</CustomLink>
                <CustomLink sx={linkStyle} to="#" variant='h6'>Start</CustomLink>

            </Stack>

            <Box sx={{
                position: "fixed",
                background: "#fff",
                minHeight: "100vh",
                width: "100vw",
                left: 0,
                top: 0,
                zIndex: 100,
                display: navOpen ? "block" : "none"
            }}>

                <Container>

                    <Stack padding="20px 0" flexDirection="row" justifyContent="space-between" alignItems="center">
                        <CustomLink sx={{
                            color: "#000",
                            fontSize: "20px"
                        }} to="/" variant='h6'>Prio.one</CustomLink>

                        <GrClose fontSize={20} onClick={closeNav} />

                    </Stack>

                </Container>


                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}>
                    <Stack sx={{ color: "#000 !important" }} gap="20px" fontSize="30px">

                        <CustomLink sx={{
                            color: "#000",
                            "&:hover": "#F46853"
                        }} to="/" onClick={closeNav}>Home</CustomLink>

                        <CustomLink
                            sx={{
                                color: "#000",
                                "&:hover": "#F46853"
                            }} to="/products" onClick={closeNav}>Products</CustomLink>

                        <CustomLink sx={{
                            color: "#000",
                            "&:hover": "#F46853"
                        }} to="/faq" onClick={closeNav}>FAQs</CustomLink>

                    </Stack>

                </Box>



            </Box>

            <Stack display={{ xs: "none", md: "flex" }} pt={5} flexDirection="row" alignItems="center" justifyContent="space-between">

                <Box sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 3
                }}>
                    <HeadingLink sx={linkStyle} to="/" variant='h6'>Prio.one</HeadingLink>
                    <CustomLink sx={linkStyle} to="/products">Unser Service</CustomLink>
                    <Divider sx={dividerStyle} />
                    <CustomLink sx={linkStyle} to="/products">Über uns</CustomLink>
                    <Divider sx={dividerStyle} />
                    <CustomLink sx={linkStyle} to="/faq">FAQs</CustomLink>
                    <Divider sx={dividerStyle} />

                    <Box className='mehr' sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}>
                        <CustomLink sx={linkStyle} to="#" >Mehr</CustomLink>
                        <FiChevronDown style={linkStyle} />

                        <Box className='hoverBox' sx={{
                            position: "absolute",
                            top:0,
                            left: "-25px",
                            width: "100px",
                            height: "150px",
                            display: "none"
                        }}>


                            <Box sx={{
                                marginTop: "30px",
                                background: "#fff",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                                padding: "20px",
                                borderRadius: "10px",
                                top: "30px",
                                left: "-25px",
                                width: "180px",
                            }}>

                                <Box sx={{
                                    color: "#1C2B49CC",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    "&:hover": { color: "#F46853" }
                                }}>Unser Blog</Box>

                                <Box sx={{
                                    color: "#1C2B49CC",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    "&:hover": { color: "#F46853" }
                                }}>Für Ärzte</Box>

                                <Box sx={{
                                    color: "#1C2B49CC",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    "&:hover": { color: "#F46853" },
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "10px"
                                }}>prio.one Community

                                    <img width="15px" src="./lock.svg" />
                                </Box>

                            </Box>

                        </Box>

                    </Box>

                </Box>

                <Box sx={{
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    gap: 3
                }}>
                    <CustomLink sx={linkStyle} to="#" >Login</CustomLink>

                    <StyledButton text="Los geht’s" sx={buttonStyle} />

                </Box>

            </Stack>

        </Container>

    )
}

export default NavBar