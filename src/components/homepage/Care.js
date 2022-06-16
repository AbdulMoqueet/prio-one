import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'

import Slider from "react-slick";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import AnimatedButton from '../buttons/AnimatedButton'

const Care = () => {

    const [progressWidth, setProgressWidth] = useState(25);

    const settings = {
        className: "center",
        infinite: false,
        slidesToShow: 2,
        swipeToSlide: true,
        nextArrow: <NextIcon width={progressWidth} />,
        prevArrow: <PrevIcon width={progressWidth} />,
        afterChange: (index) => {
            console.log(index);
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
                            <Typography fontSize="28px">Die Priorität unseres Team:</Typography>
                            <Typography mb={3} fontSize="28px">du und deine Gesundheit!</Typography>



                            <Typography sx={{
                                width: "400px",
                                color: "#1C2B49B2",
                                lineHeight: "1.8"
                            }}>Um die gynäkologische Versorgung der Frau kontinuierlich zu verbessern, besteht prio.one aus einem multidisziplinären Team aus Digital- und PharmaexpertInnen, GynäkologInnen, Data Scientists und Softwareentwicklern.</Typography>

                            <AnimatedButton
                                text="Triff’ das Team"
                                iconSize="24px"
                                sx={{
                                    background: "#DAA49A4D",
                                    color: "#F46853",
                                    "&:hover": { background: "#F46853", color: "#fff" }
                                }}
                            />

                        </Box>

                    </Grid>



                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            position: "absolute",
                            right: "-5%",
                            width: "600px"
                        }}>


                            <Slider className='care-slider' {...settings}>
                                <div className='care-slider__slide' >
                                    <img className='care-slider__img'
                                        src="./slider__1.png"
                                        alt=""
                                    />
                                </div>
                                <div className='care-slider__slide'>
                                    <img className='care-slider__img'
                                        src="./slider__1.png"
                                        alt=""
                                    />
                                </div>
                                <div className='care-slider__slide'>
                                    <img className='care-slider__img'
                                        src="./slider__1.png"
                                        alt=""
                                    />
                                </div>
                                <div className='care-slider__slide'>
                                    <img className='care-slider__img'
                                        src="./slider__1.png"
                                        alt=""
                                    />
                                </div>
                                <div className='care-slider__slide'>
                                    <img className='care-slider__img'
                                        src="./slider__1.png"
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
                    </Grid>

                </Grid>

            </Container>

        </Box>
    )
    
}

const PrevIcon = ({ onClick, width }) => {
    return (
        <div className = {width===25?"slick-icons slick-icons--left slick-icon__disabled": "slick-icons slick-icons--left"}>
            <RiArrowLeftSLine className="slick-icons--left" onClick={onClick} />
        </div>
    );
};

const NextIcon = ({ onClick, width }) => {
    return (
        <div className={width === 100?"slick-icons slick-icons--right slick-icon__disabled":"slick-icons slick-icons--right"}>
            <RiArrowRightSLine className="slick-icons--right" onClick={onClick} />
        </div>
    );
};

export default Care