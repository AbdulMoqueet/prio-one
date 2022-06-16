import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AnimatedButton from '../buttons/AnimatedButton'

const YourChoice = () => {
    return (
        <Box py="80px" sx={{position: "relative"}}>

            <Container>



                <Grid container mt={4}>

                    <Grid item xs={12} md={6}>

                        <Box sx={{
                            background: "#fff",
                            height: "200px",
                            width: "320px",
                            borderRadius: "30px",
                            border: "20px solid #FAFAFA"
                        }}>

                            <Typography pl={2} pt={2} color="#1C2B49E5">Bevorzugte Pillenmarke</Typography>

                            <div className="your-choice__grid">

                                <div className="your-choice__item">
                                    <img src='./your_choice__1.png' />
                                </div>

                                <div className="your-choice__item">
                                    <img src='./your_choice__2.png' />
                                </div>

                                <div className="your-choice__item">
                                    <img src='./your_choice__3.png' />
                                </div>

                                <div className="your-choice__item">
                                    <img src='./your_choice__4.png' />
                                </div>

                                <div className="your-choice__item">
                                    <img src='./your_choice__5.png' />
                                </div>

                                <div className="your-choice__item">
                                    <img src='./your_choice__6.png' />
                                </div>

                            </div>

                        </Box>

                        <Box sx={{
                            position: "absolute",
                            left: 0,
                            bottom: "-70px"
                        }} component='img' src='./hand_with_meds.png' />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box>
                            <Typography mb={3} color="#1C2B49B2">YOUR BODY, YOUR CHOICE</Typography>
                            <Typography fontSize="28px">Du hast die Wahl - uber</Typography>
                            <Typography mb={3} fontSize="28px">120 zugelassene Marken</Typography>



                            <Typography sx={{
                                width: "400px",
                                color: "#1C2B49B2",
                                lineHeight: "1.8"
                            }}>prio.one - der goldene Weg zu der fur dich passenden Antibabypille. Du willst mehr zu allen gelisteten Marken erfahren. Hier findest du Informationen zu uber 32 Herstellern. </Typography>

                            <AnimatedButton
                                text="Zu den Marken"
                                iconSize="24px"
                                sx={{
                                    background: "#DAA49A4D",
                                    color: "#F46853",
                                    "&:hover": { background: "#F46853", color: "#fff" }
                                }}
                            />

                        </Box>


                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}

export default YourChoice