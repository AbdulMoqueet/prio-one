import { Box, Grid, Stack, styled, Typography } from '@mui/material'
import React from 'react'
import { AiFillStar } from "react-icons/ai"

import Slider from "react-slick";
import ReviewItem from './ReviewItem';


const StyledStar = styled(Box)({
    background: "#00B67A",
    width: "30px",
    height: "30px",
    display: "grid",
    placeItems: "center",
    fontSize: "24px",
    color: "#fff"
})

const Review = () => {

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Box py="80px">

            <Typography mt={6} textAlign="center" fontSize="28px">From real customers</Typography>

            <Grid container mt={5}>

                <Grid item xs={12} md={3}>
                    <Box mb={{ xs: 4, md: 0 }}>
                        <Typography textAlign="center" fontSize="20px">Excellent</Typography>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "10px",
                            margin: "10px 0"
                        }}>
                            {[1, 2, 3, 4, 5].map((item) => <StyledStar key={item}><AiFillStar /></StyledStar>)}
                        </Box>

                        <Typography sx={{ margin: "10px 0" }} fontSize="12px" color="#818181" textAlign="center">
                            Based on <span style={{
                                color: "#1C1C1C",
                                textDecoration: "underline"
                            }}>2,350 reviews</span>
                        </Typography>

                        <Typography sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontSize: "20px",
                            gap: "6px"
                        }}>
                            <AiFillStar style={{ color: "#00B67A", fontSize: "24px" }} />
                            Trustpilot
                        </Typography>

                    </Box>


                </Grid>

                <Grid item xs={12} md={9}>

                    <Box sx={{

                        width: "calc(100% - 80px)",
                        margin: "0 auto",
                    }}>

                        <Slider className='review-slider' {...settings}>

                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
                                    .map((item) => <div key={item} className="review__grid" >
                                        <ReviewItem className="review__item" />
                                    </div>)
                            }

                        </Slider>

                    </Box>




                </Grid>

            </Grid>



        </Box>
    )
}

export default Review