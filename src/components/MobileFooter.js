import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'

import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const IconBox = styled(Link)({
    background: "#1C2B49",
    height: "40px",
    width: "40px",
    display: "grid",
    placeItems: "center",
    color: "#fff",
    fontSize: "20px",
    borderRadius: "50%",
    "&:hover": { background: "#F46853" }
})

const FlexBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px"
})

const CustomLink = styled(Link)({
    color: "#1C2B49B2",
    fontWeight: "500",
    textDecoration: "none",
    "&:hover": { color: "#F46853" }
})

const MobileFooter = () => {
    return (
        <Box pt="80px" sx={{
            display: { xs: "block", md: "none" }
        }}>

            <Box sx={{
                height: "6px",
                background: "linear-gradient(269.91deg, #C25A3F 19.54%, rgba(194, 90, 63, 0.24) 125.36%)"

            }}></Box>

            <Box mt={5} sx={{
                textAlign: "center",
                color: "#1C2B49"
            }}>

                <Typography fontSize="24px">
                    Find us on social media
                </Typography>

                <Stack mt={5} flexDirection="row" gap="24px" justifyContent="center">

                    <IconBox to="#">
                        <BsInstagram />
                    </IconBox>

                    <IconBox to="#">
                        <FaFacebookF />
                    </IconBox>

                </Stack>

                <Typography mt={5} fontWeight="300" fontSize="20px">Prio.one</Typography>

                <Typography mt={5} fontSize="24px">
                    Medizinsche
                </Typography>

                <Typography fontSize="24px">
                    Aufsichtsbehörde
                </Typography>

                <Box sx={{
                    margin: "auto",
                    marginTop: 5,
                    width: "170px",
                    display: "block"
                }} component='img' src='./care_quality.png' />

                <Box sx={{
                    margin: "auto",
                    marginTop: 5,
                    width: "170px",
                    display: "block"
                }} component='img' src='./arzten.png' />


                <Grid container mt={5}>

                    <Grid item xs={6} display="flex" justifyContent="center">
                        <Box>
                            <Typography mb={4} fontSize="24px">Company</Typography>
                            <FlexBox>

                                <CustomLink to="#">About us</CustomLink>
                                <CustomLink to="#">Blog</CustomLink>
                                <CustomLink to="#">Careers</CustomLink>
                            </FlexBox>
                        </Box>

                    </Grid>



                    <Grid item xs={6} display="flex" justifyContent="center">
                        <Box>
                            <Typography mb={4} fontSize="24px">Help</Typography>
                            <FlexBox>

                                <CustomLink to="/faq">FAQ</CustomLink>
                                <CustomLink to="#">Contact Us</CustomLink>
                                <CustomLink to="#">Beschwerden</CustomLink>
                                <CustomLink to="#">Birth Control</CustomLink>
                                <CustomLink to="#">Brands</CustomLink>
                            </FlexBox>
                        </Box>
                    </Grid>
                </Grid>


                <Box mt={8} sx={{
                    background: "#1C2B49",
                    paddingTop: "80px",
                    paddingBottom: "100px",
                    textAlign: "center"
                }}>

                    <Stack flexDirection="row" justifyContent="center" gap="20px">
                        <CustomLink sx={{ color: "#fff", fontWeight: "400" }} to="#">Impressum</CustomLink>
                        <CustomLink sx={{ color: "#fff", fontWeight: "400" }} to="#">Datenschutz</CustomLink>
                        <CustomLink sx={{ color: "#fff", fontWeight: "400" }} to="#">AGB</CustomLink>
                    </Stack>

                    <Typography mt={4} color="#fff">© 2022 prio.one. All Rights reserved.</Typography>

                </Box>

            </Box>



        </Box>
    )
}

export default MobileFooter