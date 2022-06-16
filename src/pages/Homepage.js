import React from 'react'
import Care from '../components/homepage/Care'
import ForDoctors from '../components/homepage/ForDoctors'
import Hero from '../components/homepage/Hero'
import Review from '../components/homepage/Review'
import Vision from '../components/homepage/Vision'

const Homepage = () => {
    return (
        <>
            <Hero />
            <Vision />
            <Care />
            <Review />
            <ForDoctors />
        </>
    )
}

export default Homepage