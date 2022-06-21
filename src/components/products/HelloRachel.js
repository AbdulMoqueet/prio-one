import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const HelloRachel = () => {
    return (
        <Box pt="80px" sx={{background: "#E5E5E5"}}>
            <Container >

                <Grid container>

                    <Grid item py={4} xs={12} md={6} display="flex" justifyContent="center">

                        <Box sx={{
                            background: "#fff",
                            width: {xs:"260px", sm:"300px"},
                            padding: "40px",
                            borderRadius: "40px"
                        }}>
                            <Typography mt={6} color="#1C2B49" fontSize="28px">
                                Our Gynaecological
                            </Typography>

                            <Typography color="#1C2B49" fontSize="28px">
                                prio.one App
                            </Typography>

                            <Typography sx={{
                                color: "#1C2B49B2",
                                lineHeight: "1.8",
                                marginTop: "40px",
                                fontSize: "14px"
                            }}>The prio.one app doesn’t only provide you with a daily pill reminder – you will also get to know your body in a completely new way! </Typography>

                            <Typography sx={{
                                color: "#1C2B49B2",
                                lineHeight: "1.8",
                                marginTop: "20px",
                                fontSize: "14px"
                            }}>Track your daily physical conditions and emotional state to receive personalized health recommendations. Through your birth control prescription, you receive exclusive access to the prio.one app – free of charge, of course.</Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6} display="flex" justifyContent="flex-start">

                        <Box sx={{
                            width: "400px",
                            transform: "translateY(-80px)"
                        }} component="img" src="./phone.png" />

                    </Grid>

                </Grid>

            </Container>
        </Box>
    )
}

export default HelloRachel