import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import AnimatedButton from '../buttons/AnimatedButton'

const SocialImpact = () => {

    const [progressWidth, setProgressWidth] = useState(25);

    const settings = {
        className: "center",
        infinite: false,
        slidesToShow: 2,
        swipeToSlide: true,
        nextArrow: <NextIcon width={progressWidth} />,
        prevArrow: <PrevIcon width={progressWidth} />,
        afterChange: (index) => {
            setProgressWidth((100 / 4) * (index + 1));
        },
    };

    return (
        <Box py="80px" position="relative">

            <Container>

                <Grid container>

                    <Grid item xs={12} md={6}>

                        <Box>
                            <Typography mb={3} color="#1C2B49B2">FÜRSORGE IN UNSERER DNA</Typography>
                            <Typography fontSize="28px">Mit jeder Bestellung </Typography>
                            <Typography fontSize="28px">spenden wir 1,50 EUR an ein</Typography>
                            <Typography fontSize="28px">Frauengesundheitsprojekt</Typography>
                            <Typography mb={3} fontSize="28px">in Malawi.</Typography>



                            <Typography sx={{
                                width: "400px",
                                color: "#1C2B49B2",
                                lineHeight: "1.8"
                            }}>Plan International has a bold new ambition to work with 100 million girls over the next 5 years to transform their lives by supporting them to learn, lead, decide and thrive.</Typography>


                            <Typography sx={{
                                width: "400px",
                                color: "#1C2B49B2",
                                lineHeight: "1.8",
                                marginTop: "30px"
                            }}>When girls, young people and activists come together to take collective action as civil society, they are better able to demand and influence change. We focus our efforts on equality, inclusion and diversity. </Typography>

                        </Box>

                    </Grid>



                    <Grid item xs={12} md={6}>

                        <Box sx={{
                            height: "400px"
                        }}>
                            <Box sx={{
                                position: "absolute",
                                right: "-5%",
                                width: "600px",
                                bottom: "0"
                            }}>

                                <Slider className='care-slider' {...settings}>
                                    <div className='care-slider__slide' >
                                        <img className='care-slider__img'
                                            src="./social-impact__1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className='care-slider__slide'>
                                        <img className='care-slider__img'
                                            src="./social-impact__1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className='care-slider__slide'>
                                        <img className='care-slider__img'
                                            src="./social-impact__1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className='care-slider__slide'>
                                        <img className='care-slider__img'
                                            src="./social-impact__1.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className='care-slider__slide'>
                                        <img className='care-slider__img'
                                            src="./social-impact__1.png"
                                            alt=""
                                        />
                                    </div>
                                </Slider>

                                <div className="progress">
                                    <div
                                        style={{ width: `${progressWidth}%` }}
                                        className="progress--fill"
                                    ></div>
                                </div>


                            </Box>

                        </Box>
                    </Grid>

                </Grid>

            </Container>

        </Box>
    )

}

const PrevIcon = ({ onClick, width }) => {
    return (
        <div className={width === 25 ? "slick-icons slick-icons--left slick-icon__disabled" : "slick-icons slick-icons--left"}>
            <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
        </div>
    );
};

const NextIcon = ({ onClick, width }) => {
    return (
        <div className={width === 100 ? "slick-icons slick-icons--right slick-icon__disabled" : "slick-icons slick-icons--right"}>
            <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
        </div>
    );
};

export default SocialImpact