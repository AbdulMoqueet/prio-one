import { Stack, Typography } from '@mui/material'
import React from 'react'
import { AiFillStar } from "react-icons/ai"

const ReviewItem = () => {
    return (
        <div className="review__item">
            {[1, 2, 3, 4, 5].map((item) => <AiFillStar key={item} style={{ color: "#00B67A", fontSize: "16px" }} />)}
            <Typography fontWeight="500" my={1}>Andy E</Typography>

            <Typography fontSize="14px" my={1}>Andy E (Success Manager at Freelancer.com) great it helped me. (helped me allot)</Typography>

            <Stack flexDirection='row' alignItems='center' gap="10px">
                <img src='./testimonial__1.png' alt="" />
                <Typography fontWeight={500}>Andy E</Typography>
            </Stack>

        </div>
    )
}

export default ReviewItem