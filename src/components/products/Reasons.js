import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

import Heading from '../Typo/Heading'

const Reasons = () => {
    return (
        <Box pb="140px" pt="80px">

            <Container>

                <Heading text="Warum prio.one? 6 Gründe:" sx={{
                    textAlign: "center"
                }} />

                <Grid container mt={4}>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ color: "#1C2B49" }}>

                            <Stack sx={{
                                flexDirection: "row",
                                gap: "20px"
                            }}>
                                <Typography fontSize="26px">01</Typography>
                                <Box sx={{ width: "300px" }}>
                                    <Typography fontSize="24px">Über 120 Pillen-Marken.</Typography>
                                    <Typography mt={2} lineHeight="1.9" color="#1C2B49B2">Über 120 zugelassene Marken zu den niedrigsten Preisen – wie in der Apotheke deines Vertrauens.</Typography>
                                </Box>
                            </Stack>

                            <Stack sx={{
                                flexDirection: "row",
                                gap: "20px",
                                marginTop: "40px"
                            }}>
                                <Typography fontSize="26px">02</Typography>
                                <Box sx={{ width: "300px" }}>
                                    <Typography fontSize="24px">Bequeme Nachlieferung.</Typography>
                                    <Typography mt={2} lineHeight="1.9" color="#1C2B49B2">Ein kleiner Reminder, ein neuer Fragebogen und der Refill kommt sofort.</Typography>
                                </Box>
                            </Stack>


                            <Stack sx={{
                                flexDirection: "row",
                                gap: "20px",
                                marginTop: "40px"
                            }}>
                                <Typography fontSize="26px">03</Typography>
                                <Box sx={{ width: "300px" }}>
                                    <Typography fontSize="24px">Kostenfrei und diskret geliefert…</Typography>
                                    <Typography mt={2} lineHeight="1.9" color="#1C2B49B2">… und ein paar kleine Überraschungen extra für dich gibt’s oben drauf!</Typography>
                                </Box>
                            </Stack>


                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>

                        <Box sx={{
                            width: "100%"
                        }} component='img' src='./reason__1.png' />

                    </Grid>

                </Grid>



                <Grid container>

                    <Grid item xs={12} md={6}>

                        <Box sx={{
                            position: "relative",
                            textAlign: "right"
                        }}>

                            <Box sx={{
                                width: "300px"
                            }} component='img' src='./reason__2.png' />

                            <Box sx={{
                                position: "absolute",
                                width: "250px",
                                left: "150px",
                                bottom: "-220px",
                                zIndex: -1
                            }} component='img' src='./reason__3.png' />



                            <Box sx={{
                                color: "#1C2B49B2",
                                background: "#fff",
                                padding: "20px",
                                position: "absolute",
                                top: "20px",
                                left: "30px",
                                borderRadius: "14px"
                            }}>

                                <Typography fontSize="20px">How are you feeling today?</Typography>

                                <Stack sx={{
                                    flexDirection: "row",
                                    gap: "10px",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }}>

                                    <Box component='img' src='./feeling__1.svg' />
                                    <Typography>I’m feeling alright</Typography>

                                </Stack>

                                <Stack sx={{
                                    flexDirection: "row",
                                    gap: "10px",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }}>

                                    <Box component='img' src='./feeling__2.svg' />
                                    <Typography>I’m feeling fantastic</Typography>

                                </Stack>


                                <Stack sx={{
                                    flexDirection: "row",
                                    gap: "10px",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }}>

                                    <Box component='img' src='./feeling__3.svg' />
                                    <Typography>I’m feeling very good</Typography>

                                </Stack>


                                <Stack sx={{
                                    flexDirection: "row",
                                    gap: "10px",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }}>

                                    <Box component='img' src='./feeling__4.svg' />
                                    <Typography>I’ve had better days</Typography>

                                </Stack>


                                <Stack sx={{
                                    flexDirection: "row",
                                    gap: "10px",
                                    alignItems: "center",
                                    marginTop: "30px"
                                }}>

                                    <Box component='img' src='./feeling__5.svg' />
                                    <Typography>I’m feeling very down</Typography>

                                </Stack>

                            </Box>


                        </Box>


                    </Grid>


                    <Grid item xs={12} md={6}>


                        <Box sx={{
                            color: "#1C2B49",
                            marginLeft: "60px"
                        }}>

                            <Stack sx={{
                                flexDirection: "row",
                                gap: "20px"
                            }}>
                                <Typography fontSize="26px">04</Typography>
                                <Box sx={{ width: "300px" }}>
                                    <Typography fontSize="24px">prio.one App.</Typography>
                                    <Typography mt={2} lineHeight="1.9" color="#1C2B49B2">Erhalte personalisierte Gesundheitsempfehlungen und lerne deinen Körper neu kennen.</Typography>
                                </Box>
                            </Stack>

                            <Stack sx={{
                                flexDirection: "row",
                                gap: "20px",
                                marginTop: "40px"
                            }}>
                                <Typography fontSize="26px">05</Typography>
                                <Box sx={{ width: "300px" }}>
                                    <Typography fontSize="24px">Kostenloser Ärzte-Chat.</Typography>
                                    <Typography mt={2} lineHeight="1.9" color="#1C2B49B2">Kontaktiere jederzeit unser gynäkologisches Team über unseren Chat.</Typography>
                                </Box>
                            </Stack>


                            <Stack sx={{
                                flexDirection: "row",
                                gap: "20px",
                                marginTop: "40px"
                            }}>
                                <Typography fontSize="26px">06</Typography>
                                <Box sx={{ width: "300px" }}>
                                    <Typography fontSize="24px">Social Impact</Typography>
                                    <Typography mt={2} lineHeight="1.9" color="#1C2B49B2">Mit jeder Bestellung spenden wir 1,5€ an ein Frauengesundheitsprojekt in Malawi.</Typography>
                                </Box>
                            </Stack>


                        </Box>


                    </Grid>

                </Grid>


            </Container>

        </Box>
    )
}

export default Reasons