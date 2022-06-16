import { Box, Container, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'

import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const FlexBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px"
})

const IconBox = styled(Box)({
    background: "#1C2B49",
    height: "40px",
    width: "40px",
    display: "grid",
    placeItems: "center",
    color: "#fff",
    fontSize: "20px",
    borderRadius: "50%"
})

const Footer = () => {
    return (
        <Box pt="80px">
            <Box sx={{
                height: "2px",
                background: "#C25A3F"
            }}></Box>
            <Container sx={{ padding: "50px 0" }}>

                <Grid container>

                    <Grid item xs={12} md={4} >

                        <FlexBox>
                            <Typography fontSize="20px">Company</Typography>
                            <Typography>About Us</Typography>
                            <Typography>Blogs</Typography>
                            <Typography>Career</Typography>
                        </FlexBox>

                    </Grid>

                    <Grid item xs={12} md={4}>

                        <FlexBox>
                            <Typography fontSize="20px">Find us on Social media</Typography>

                            <Stack flexDirection="row" gap="10px">

                                <IconBox>
                                    <BsInstagram />
                                </IconBox>

                                <IconBox>
                                    <FaFacebookF />
                                </IconBox>
                            </Stack>


                            <Typography mt={2} fontSize="24px">Prio.one</Typography>
                        </FlexBox>

                    </Grid>

                    <Grid item xs={12} md={4}>

                        <FlexBox>
                            <Typography fontSize="20px">Help</Typography>
                            <Typography>FAQ</Typography>
                            <Typography>Contacts</Typography>
                            <Typography>Beschwerden</Typography>
                            <Typography>Birth Control Brands</Typography>
                        </FlexBox>

                    </Grid>

                </Grid>

                <Box sx={{
                    margin: "auto",
                    marginTop: "30px",
                    textAlign: "center"
                }}>
                    <Typography fontSize="24px">
                        Medizinsche Aufsichtsbehörde
                    </Typography>

                    <Stack sx={{
                        flexDirection: "row",
                        justifyContent: "center",
                        gap: "30px",
                        alignItems: "center",
                        marginTop: "20px"
                    }}>
                        <Box sx={{height: "60px"}} component='img' src='./care_quality.png' />
                        <Box sx={{height: "80px"}} component='img' src='./arzten.png' />
                    </Stack>

                </Box>

            </Container>

            <Stack sx={{
                color: "#fff",
                padding: "30px 0",
                gap: "30px",
                flexDirection: "row",
                justifyContent: "center",
                background: "#1C2B49"
            }} >

                <Typography>Impressum</Typography>
                <Typography>Datenschutz</Typography>
                <Typography>AGB</Typography>
                <Typography>© 2022 prio.one. All Rights reserved.</Typography>

            </Stack>

        </Box>
    )
}

export default Footer