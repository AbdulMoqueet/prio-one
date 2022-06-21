import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Heading from '../Typo/Heading'

const LoveMore = () => {
    return (
        <Box py="80px" mt="100px">
            <Container >


                <Heading text="Love more, stress less. So geht’s" sx={{
                    textAlign: "center"
                }} />

                <Grid container mt={4}>

                    <Grid item xs={12} md={4} sx={{
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center"
                    }}>

                        <Box>

                            <Stack flexDirection="row" gap="20px">
                                <Heading text="01" />
                                <Box sx={{
                                    width: "30px",
                                    transform: "translateY(-5px)"
                                }} component='img' src='./love_more_icon__1.svg' />
                            </Stack>

                            <Typography mt={3} color="#1C2B49" fontSize="24px">
                                Ein paar Minuten für
                            </Typography>

                            <Typography color="#1C2B49" fontSize="24px">
                                deine Gesundheit.
                            </Typography>

                            <Box mt={2} sx={{
                                width: "300px"
                            }}>
                                <Typography sx={{
                                    color: "#1C2B49B2",
                                    lineHeight: "1.9"
                                }}>
                                    Schon unseren Fragebogen ausgefüllt? 20 Fragen, weniger als 5 Minuten: Wähle deine Pille des Vertrauens – oder du überlässt uns die Suche nach der zu dir passenden Antibabypille.
                                </Typography>
                            </Box>

                        </Box>

                    </Grid>

                    <Grid item xs={12} md={4} sx={{
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center"
                    }}>

                        <Box>
                            <Stack flexDirection="row" gap="20px">
                                <Heading text="02" />
                                <Box sx={{
                                    width: "30px",
                                    transform: "translateY(-5px)"
                                }} component='img' src='./love_more_icon__2.svg' />
                            </Stack>

                            <Typography mt={3} color="#1C2B49" fontSize="24px">
                                Gesucht - gefunden
                            </Typography>

                            <Typography color="#1C2B49" fontSize="24px">
                                - geliefert.
                            </Typography>

                            <Box mt={2} sx={{
                                width: "300px"
                            }}>
                                <Typography sx={{
                                    color: "#1C2B49B2",
                                    lineHeight: "1.9"
                                }}>
                                    Du qualifizierst dich für ein Rezept? Sobald du deine Antibabypille gewählt hast, kann’s losgehen: Die Lieferung findest du schon bald mit coolen Goodies in deinem Briefkasten.
                                </Typography>
                            </Box>
                        </Box>

                    </Grid>


                    <Grid item xs={12} md={4} sx={{
                        marginTop: "40px",
                        display: "flex",
                        justifyContent: "center"
                    }}>

                        <Box>

                            <Stack flexDirection="row" gap="20px">
                                <Heading text="03" />
                                <Box sx={{
                                    width: "30px",
                                    transform: "translateY(-5px)"
                                }} component='img' src='./love_more_icon__3.svg' />
                            </Stack>

                            <Typography mt={3} color="#1C2B49" fontSize="24px">
                                Just relax: bequem
                            </Typography>

                            <Typography color="#1C2B49" fontSize="24px">
                                nachversorgt.
                            </Typography>

                            <Box mt={2} sx={{
                                width: "300px"
                            }}>
                                <Typography sx={{
                                    color: "#1C2B49B2",
                                    lineHeight: "1.9"
                                }}>
                                    Hat da jemand „bequem“ gesagt? ROMY hat deinen Pillen-Bestand im Blick: Wenn’s eng wird, einfach schnell den Fragebogen ausfüllen – und Nachschub naht sofort.
                                </Typography>
                            </Box>

                        </Box>

                    </Grid>

                </Grid>

            </Container>
        </Box>
    )
}

export default LoveMore