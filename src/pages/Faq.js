import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/homepage/NavBar'
import ControlledAccordions from '../components/faq/ControlledAccordions'
import Try from '../components/faq/Try'

const Faq = () => {
  return (
    <Box>

      <NavBar
        linkStyle={{ color: "#000" }}
        dividerStyle={{ background: "#000" }}
        buttonStyle={{
          background: "#1C2B49",
          color: "#fff",
          "&:hover": { background: "#121c2f" }
        }} />


      <Container>

        <Box sx={{
          width: "600px",
          margin: "auto",
          marginTop: "40px",

        }}>

          <Typography textAlign="center" color="#1C2B49" fontSize="30px">FAQs</Typography>

          <Typography color="#1C2B49B2" mt={2} lineHeight="1.9">Du hast Fragen zur Verschreibung, zur Medikation, zu deiner Privatsphäre, deiner Sicherheit, zur prio.one-Mission und Co.? Wir stehen dir gerne Rede und Antwort. Du hast noch mehr Fragen und findest hier keine Antwort? Schreib‘ uns: support@prioone.de</Typography>

        </Box>


        <Box sx={{
          width: "800px",
          margin: "auto",
          marginTop: "40px"
        }}>


          <ControlledAccordions />

        </Box>

        <Try />

      </Container>
    </Box>
  )
}

export default Faq