import { Box, Button, Container, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import AnimatedButton from '../buttons/AnimatedButton'
import NavBar from './NavBar'



const Hero = () => {
    return (
        <Box sx={{
            position: "relative",
            minHeight: "100vh",
            backgroundImage: "url(./hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>

            <NavBar mobileStyle={{color: "#fff"}} />

            <Container>
                <Box sx={{
                    position: "absolute",
                    top: {xs:"70%", sm:"60%", md:"50%"},
                    color: "#fff",
                    left: {sm:"50%", md:"auto"},
                    transform: {xs: "translateY(-50%)", sm: "translateY(-50%) translateX(-50%)", md:"translateY(-50%) translateX(0)"}
                }}>

                    <Box>

                        <Box sx={{
                            width: {xs:"360px", sm:"400px", md:"550px"}
                        }}>
                            <Typography fontSize="30px" variant='p' component='p'>
                                EINE ZUKUNFT IN DER DEINE GESUNDHEIT PRIO.ONE IST
                            </Typography>
                        </Box>

                        <AnimatedButton 
                        text="Hier geht’s zur Pille" 
                        iconSize= "24px"
                        />

                    </Box>

                </Box>


                <Box sx={{
                    position: "absolute",
                    bottom: "60px",
                    width: "50px",
                    placeItems: "center",
                    display: {xs:"none", md:"grid"}
                }}>

                    <Box sx={{
                        position: "relative",
                        height: "50px",
                        width: "25px",
                        border: "solid 1px #fff",
                        borderRadius: "50px"
                    }}>

                        <Box className='hero__ball' sx={{
                            position: "absolute",
                            height: "5px",
                            width: "5px",
                            background: "#fff",
                            borderRadius: "50%",
                            left: "50%",
                            top: "10%",
                            transform: "translateX(-50%)"
                        }}>

                        </Box>
                        
                    </Box>
                    <Typography mt={1} color="#fff" textAlign="center" variant='p' component='p'>Scroll</Typography>
                </Box>

            </Container>

        </Box>
    )
}

export default Hero