import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import AnimatedButton from '../buttons/AnimatedButton'
import Heading from '../Typo/Heading'

const Control = () => {
    return (
        <Box pt={{xs:"0px", sm:"120px"}} pb="80px">

            <Container>

                <Box sx={{margin: "auto"}}>

                    <Box sx={{
                        width: {xs:"300px", sm:"500px"},
                        margin: "auto",
                        textAlign: "center"
                    }}>
                        <Heading text="Bereit die Kontrolle zu übernehmen? Your body, your choice. Nimm‘ dir ein paar Minuten Zeit für unseren Gesundheitsfragebogen."/>

                        <AnimatedButton text="Hier geht’s zur Pille" iconSize="24px" sx={{
                                margin: "auto",
                                marginTop: "70px",
                                background: "#1C2B49",
                                color: "#fff",
                                "&:hover": { background: "#121c2f" }
                            }} />


                    </Box>

                </Box>

            </Container>

        </Box>
    )
}

export default Control