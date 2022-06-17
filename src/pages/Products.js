import React from 'react'
import Review from '../components/homepage/Review'
import BigBox from '../components/products/BigBox'
import Care from '../components/products/Care'
import Control from '../components/products/Control'
import Health from '../components/products/Health'
import HelloRachel from '../components/products/HelloRachel'
import Hero from '../components/products/Hero'
import LoveMore from '../components/products/LoveMore'
import Reasons from '../components/products/Reasons'
import SocialImpact from '../components/products/SocialImpact'
import Waiting from '../components/products/Waiting'
import YourChoice from '../components/products/YourChoice'

const Products = () => {
    return (
        <>
            <Hero />
            <LoveMore />
            <Care />
            <YourChoice />
            <Health />
            <HelloRachel />
            <Waiting />
            <BigBox />
            <Review />
            <SocialImpact />
            <Reasons />
            <Control />
        </>
    )
}

export default Products