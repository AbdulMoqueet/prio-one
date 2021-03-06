import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AnimatedButton from '../buttons/AnimatedButton'

import Heading from '../Typo/Heading'

const Try = () => {
    return (
        <Box py="80px">

            <Container>

                <Grid container>

                    <Grid item xs={12} md={6} order={{xs:2, md:1}} >

                        <Box sx={{
                            textAlign: "right",
                            position: "relative"
                        }}>

                            <Box sx={{
                                width: "300px",
                                marginRight: {xs:0, md:"40px"}
                            }} component='img' src='./try__1.png' />

                            <Box sx={{
                                position: "absolute",
                                width: "220px",
                                left: {xs:"-30px", sm:"300px", md:"120px"},
                                bottom: "-70px"
                            }} component='img' src='./try__2.png' />


                        </Box>


                    </Grid>

                    <Grid item pb={6} xs={12} md={6} order={{xs:1, md:2}}>

                        <Box sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center"
                        }}>

                            <Box sx={{
                                marginLeft: {xs:0, md:"40px"},
                                width: "400px"
                            }}>
                                <Heading text="Ready to give us a try?" />

                                <Typography mt={4} color="#1C2B49B2" lineHeight="1.9">
                                    Juhu! Du bist nur ein paar Schritte vom prioone-versum entfernt: Beantworte uns ein paar Fragen zu deiner Gesundheit – unser medizinisches Team übernimmt den Rest. Und schon landet deine Antibabypille kostenfrei bei dir.
                                </Typography>


                                <AnimatedButton text="Hier geht’s zur Pille" iconSize="24px" sx={{
                                    marginTop: "40px",
                                    background: "#1C2B49",
                                    color: "#fff",
                                    "&:hover": { background: "#121c2f" }
                                }} />

                            </Box>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}

export default Try