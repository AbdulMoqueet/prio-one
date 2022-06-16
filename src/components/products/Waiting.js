import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../Typo/Heading'

const Waiting = () => {
    return (
        <Box py="80px">

            <Container>

                <Grid container>

                    <Grid item xs={12} md={4}>
                        <Heading text="Was dich erwartet" />

                        <Typography sx={{
                            color: "#1C2B49B2",
                            lineHeight: "1.9",
                            marginTop: "40px",
                            width: "350px"
                        }}>
                            Every month you will receive your birth control pills in a discreetly packaged box, along with a set of handpicked goodies designed for a personalised self-care experience.
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={4}>

                        <Box>
                            <Stack flexDirection="row" gap="10px" alignItems="center">
                                <img width="50px" src="./waiting__1.png" />
                                <Typography color="#1C2B49B2">Deine Antibabypille</Typography>
                            </Stack>

                            <Stack mt={4} flexDirection="row" gap="10px" alignItems="center">
                                <img width="50px" src="./waiting__2.png" />
                                <Typography color="#1C2B49B2">Qualitative Pflegeprodukte</Typography>
                            </Stack>

                            <Stack mt={4} flexDirection="row" gap="10px" alignItems="center">
                                <img width="50px" src="./waiting__3.png" />
                                <Typography color="#1C2B49B2">Eine diskrete Verpackung </Typography>
                            </Stack>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={4}>


                        <Box>
                            <Stack flexDirection="row" gap="10px" alignItems="center">
                                <img width="50px" src="./waiting__4.png" />
                                <Typography color="#1C2B49B2">Eine suse Uberraschung</Typography>
                            </Stack>

                            <Stack mt={4} flexDirection="row" gap="10px" alignItems="center">
                                <img width="50px" src="./waiting__5.png" />
                                <Typography color="#1C2B49B2">Kostenfreie Lieferung </Typography>
                            </Stack>

                            <Stack mt={4} flexDirection="row" gap="10px" alignItems="center">
                                <img width="50px" src="./waiting__6.png" />
                                <Typography color="#1C2B49B2">Exclusive Sticker</Typography>
                            </Stack>
                        </Box>

                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
}

export default Waiting