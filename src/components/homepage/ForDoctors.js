import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import AnimatedButton from '../buttons/AnimatedButton'

const ForDoctors = () => {
  return (
    <Box py="80px">
      <Container sx={{ position: "relative" }}>

        <Grid container>
          <Grid item xs={12} md={6} order={{xs:2, md:1}}>
            <Box sx={{
              width: "300px",
              marginLeft: {xs:"40px", md:"70px"},
              marginTop: {xs:"80px", md:0}
            }} component='img' src='./review__1.png' alt="" />
            <Box sx={{
              position: "absolute",
              width: "200px",
              bottom: -70,
              left: {xs:"20px", md:0}
            }} component='img' src='./review__2.png' alt="" />
          </Grid>

          <Grid item xs={12} md={6} order={{xs:1, md:2}}>

            <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%"
            }}>

              <Box sx={{
                width: "400px"
              }}>
                <Typography fontSize="28px">Für Ärzte</Typography>

                <Typography lineHeight="1.8" mt={3} color="#1C2B49B2" >Unsere telemedizinische Lösung schafft einen komplementären Service zu der niedergelassenen Gynäkologie und soll langfristig einen Beitrag zur medizinischen Versorgung von Frauen leisten. Unser digitaler Ansatz ist daher explizit auf die Herausforderungen der Gynäkologie ausgerichtet.
                </Typography>

                <AnimatedButton text='Doctor’s Page' iconSize='24px' sx={{
                  background: "#1C2B49",
                  color: "#fff",
                  "&:hover": {background: "#121c2f"}
                }} />

              </Box>


            </Box>

          </Grid>


        </Grid>

      </Container>
    </Box>
  )
}

export default ForDoctors