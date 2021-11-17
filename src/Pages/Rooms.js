import React from 'react'
import Hero from "../components/Hero";
import {Link} from "react-router-dom";
import Banner from "../components/Banner";
import Contextt from "../components/Roomlist"

export default function Rooms() {
    return  (
        <>
            <Hero hero='roomsHero'>
        <Banner title="our rooms">
            <Link to='/' className="btn-primary">
                Return Home
            </Link>
        </Banner>
    </Hero>

    <Contextt/>
            </>
    )

}
