import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../homepage/NavBar'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaDropbox } from 'react-icons/fa'
import { AiFillTag } from 'react-icons/ai'
import AnimatedButton from '../buttons/AnimatedButton'

const Hero = () => {
    return (
        <Box sx={{ position: "relative" }}>

            <NavBar
                linkStyle={{ color: "#000" }}
                dividerStyle={{ background: "#000" }}
                buttonStyle={{
                    background: "#1C2B49",
                    color: "#fff",
                    "&:hover": { background: "#121c2f" }
                }} />

            <Container >


                <Grid container mt={4}>

                    <Grid item xs={12} md={6}>

                        <Box>
                            <Typography color="#1C2B49" fontSize="30px">
                                Deine Antibabypille -
                            </Typography>

                            <Typography mt={1} color="#1C2B49" fontSize="30px">
                                Bequem online verschrieben.
                            </Typography>

                            <Typography mt={1} color="#1C2B49" fontSize="30px">
                                Zu dir nach Hause geliefert.
                            </Typography>

                            <Stack mt={6}>

                                <Stack sx={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginTop: "10px"
                                }}>
                                    <IoMdCheckmarkCircleOutline color='#5E687D' fontSize="24px" />
                                    <Typography color="#5E687D">Zum Antibabypillen-Rezept in nur 5 Minuten.</Typography>
                                </Stack>


                                <Stack sx={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginTop: "20px"
                                }}>
                                    <FaDropbox color='#5E687D' fontSize="24px" />
                                    <Typography color="#5E687D">Inklusive Goodies für die schönsten prio.one-Momente.</Typography>
                                </Stack>


                                <Stack sx={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: "10px",
                                    marginTop: "20px"
                                }}>
                                    <AiFillTag color='#5E687D' fontSize="24px" />
                                    <Typography color="#5E687D">Und all das für 6,90 € (zzgl. Medikamentenpreis)</Typography>
                                </Stack>


                            </Stack>

                            <AnimatedButton text="Hier geht’s zur Pille" iconSize="24px" sx={{
                                marginTop: "70px",
                                background: "#1C2B49",
                                color: "#fff",
                                "&:hover": { background: "#121c2f" }
                            }} />

                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box sx={{
                            position: { xs: "relative", sm: "static" },
                            width: "500px",
                            height: "450px"
                        }}>

                            <Box sx={{
                                position: "absolute",
                                right: 0,
                                top: 0,
                                width: "400px",
                                zIndex: 1,
                                display: {xs:"none", sm:"block"}
                            }} component='img' src='./hand.png' />


                            <Box sx={{
                                position: "absolute",
                                left: "0",
                                transform: "rotate(130deg) scaleY(-1)",
                                top: "100px",
                                width: "300px",
                                zIndex: 1,
                                display: {xs:"block", sm:"none"}
                            }} component='img' src='./hand.png' />

                            <Box sx={{
                                position: "absolute",
                                right: 0,
                                bottom: "-100px",
                                width: { xs: "100%", sm: "500px" }
                            }} component='img' src='./box.png' />


                        </Box>

                    </Grid>

                </Grid>

            </Container>
        </Box>
    )
}

export default Hero