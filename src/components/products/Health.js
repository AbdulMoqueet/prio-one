import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import AnimatedButton from '../buttons/AnimatedButton'

import { AiOutlineMessage } from 'react-icons/ai'
import ProgressBar from '../utils/ProgressBar'
import AnimatedIconBtn from '../buttons/AnimatedIconBtn'

const Health = () => {
    return (
        <Box py="80px" sx={{ position: "relative" }}>

            <Container >

                <Grid container>

                    <Grid item xs={12} md={6}>

                        <Box>
                            <Typography mb={3} color="#1C2B49B2">EXCLUSIVE FEATURE: COMMUNITY</Typography>
                            <Typography fontSize="28px">Be part of a safe space</Typography>
                            <Typography mb={3} fontSize="28px">for female health</Typography>

                            <Typography sx={{
                                width: "400px",
                                color: "#1C2B49B2",
                                lineHeight: "1.8"
                            }}>Additionally, to your pill, you will get access to a safe and open community space focused on female health issues. Connect with other women facing the same issues. Nothing is too small or taboo to be discussed. </Typography>

                            <AnimatedIconBtn
                                iconSize="24px"
                                sx={{
                                    background: "#DAA49A4D",
                                    color: "#c25a3f",
                                    "&:hover": { background: "#c25a3f", color: "#fff" }
                                }}
                            />

                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6} sx={{
                        display: "flex",
                        marginTop: {xs: "100px", md:0},
                        justifyContent: "flex-end"
                    }}>

                        <Box>

                            <Box sx={{ position: "relative" }}>


                                <Box sx={{
                                    position: "absolute",
                                    width: "180px",
                                    height: "180px",
                                    left: -190,
                                    top: 20,
                                    padding: "20px",
                                    paddingBottom: "30px",
                                    borderRadius: "15px",
                                    color:"#1C2B49B2",
                                    background: "#fff",
                                    display:{xs:"none", sm:"block"}
                                }}>

                                    <Typography mb={4} fontSize="14px">Hat sonst noch jemand hier die folgenden Symptome?</Typography>


                                    <Stack gap="20px">

                                        <Stack flexDirection="row" gap="10px">
                                            <img width="25px" src='./health__4.svg' />
                                            <Typography>Starke Krämpfe</Typography>
                                        </Stack>

                                        <Stack flexDirection="row" gap="10px">
                                            <img width="20px" src='./health__5.svg' />
                                            <Typography>Scheidenausfluss</Typography>
                                        </Stack>

                                        <Stack flexDirection="row" gap="10px">
                                            <img width="25px" src='./health__6.svg' />
                                            <Typography>Schmierblutungen</Typography>
                                        </Stack>

                                    </Stack>


                                </Box>


                                <Box sx={{
                                    width: "300px",
                                    borderTopLeftRadius: "30px",
                                    borderTopRightRadius: "30px"
                                }} component='img' src='./health.png' />

                                <Box sx={{
                                    padding: "20px",
                                    color: "#1C2B49"
                                }}>

                                    <Stack flexDirection="row" alignItems="center" gap="10px">
                                        <Box sx={{
                                            background: "#1C2B49",
                                            color: "#fff",
                                            display: "grid",
                                            placeItems: "center",
                                            width: "50px",
                                            height: "50px",
                                            borderRadius: "50%",
                                            fontSize: "24px"
                                        }}>
                                            <AiOutlineMessage />
                                        </Box>

                                        <Box>
                                            <Typography fontSize="16px">Feed</Typography>
                                            <Typography fontSize="12px">130 Mitglieder online</Typography>
                                        </Box>

                                        <Box sx={{
                                            width: "80px",
                                            transform: "translateY(5px)"
                                        }} component="img" src="./health__1.png" />

                                    </Stack>


                                    <Stack mt={2} flexDirection="row" alignItems="center" gap="10px">
                                        <Box sx={{
                                            borderRadius: "50%",
                                            width: "50px",
                                            height: "50px"
                                        }} component='img' src='./health__2.png' />

                                        <Box>
                                            <Typography fontSize="16px">Justina Kleiner</Typography>
                                            <Typography fontSize="14px" color="#1C2B49B2">Heute, 18.30 Uhr</Typography>
                                        </Box>

                                    </Stack>

                                    <Typography mt={4} fontSize="18px">War es für dich einfach, eine Pille ohne</Typography>

                                    <Typography mb={3} fontSize="18px">Nebenwirkungen zu finden?</Typography>

                                    <ProgressBar text="Es war schwierig😪" percent="67%" />

                                    <ProgressBar text="Es war einfach 😍" percent="33%" mt={4} />

                                </Box>

                            </Box>

                        </Box>

                    </Grid>

                </Grid>

            </Container>

            <Box sx={{
                position: "absolute",
                bottom: 0,
                width: "100%"
            }} component="img" src="./health__3.png" />

        </Box>
    )
}

export default Health