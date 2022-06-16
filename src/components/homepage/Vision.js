import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Vision = () => {
  return (
    <Box sx={{
      background: "#1C2B49",
      padding: "80px 0",
      position: "relative"
    }}>

      <Container>

        <Container sx={{ position: "relative" }}>
          <Box sx={{
            position: "absolute",
            left: { xl: "-250px", md: "-100px" },
            width: { xl: "200px", md: "80px" },
            top: {xl: "-15px"}
          }} component='img' src="./graph-line__1.svg" />
        </Container>


        <Box sx={{
          position: "absolute",
          transform: "rotate(-10deg)",
          top: "0",
          right: "-100px",
          width: "90%",
          maxWidth: "1200px"
        }} component='img' src="./group.svg" />

        <Typography color="#FFFFFFB2">HEALTHCARE OF THE FUTURE</Typography>

        <Box sx={{
          width: "500px",
          marginTop: "20px"
        }}>

          <Typography color="#fff" fontSize="28px" >
            Unsere Vision
          </Typography>

          <Typography sx={{
            lineHeight: "1.8",
            color: "#FFFFFFB2",
            marginTop: "20px"
          }}>
            „Prio.one revolutioniert die Behandlung von hormonell-bedingten Beschwerden der Frau. Unsere telemedizinische Plattform und die prio.one App verbessert die gesundheitliche, gynäkologische Versorgung der Frau und generiert langfristig therapeutischen Mehrwert.
          </Typography>

        </Box>


        <Box sx={{
          width: "900px",
          height: "700px",
          position: "absolute",
          right: "0"
        }}>

          {/* Image 3rd */}
          <Box sx={{
            width: "350px",
            position: "absolute",
            right: 0,
            top: "100px"
          }} component="img" src="./vision__3.png" />

          {/* Image 1 */}
          <Box sx={{
            width: "250px",
            position: "absolute",
            right: "380px",
            top: "30px"
          }} component="img" src="./vision__1.png" />

          <Box sx={{
            width: "350px",
            position: "absolute",
            right: "380px",
            top: "220px"
          }} component="img" src="./vision__2.png" />

        </Box>


        <Typography color="#fff" mt="550px">OUR VALUES</Typography>

        <Box>
          <Box sx={{
            width: "500px",
            marginTop: "20px"
          }}>

            <Typography color="#fff" fontSize="28px" >
              Wofür wir stehen
            </Typography>

            <Typography sx={{
              lineHeight: "1.8",
              color: "#FFFFFFB2",
              marginTop: "20px"
            }}>
              Wir stehen für eine innovative Gesundheitsversorgung und sprechen dabei die Gesundheitsprobleme der Frauen ganz offen an. Es ist unser Ziel, die Lebensquaität der Frau zu verbessern, nicht nur in Deutschland sondern weltweit. So engageieren wir uns zum Beipiel mit unserem Partner Plan International für sexuelle und reproduktive Aufklärung in Afrika.

            </Typography>

          </Box>


          <Box sx={{
            position: "absolute",
            right: "0",
            bottom: "80px"
          }} component='img' src="./graph-line.svg" />

        </Box>



      </Container>

    </Box>
  )
}

export default Vision