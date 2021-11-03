import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

export default function Error() {
    return (
        <Hero>
        <Banner title="ERROR 404" subtitle="Click on the link to go to the main page">
            <Link to='/' className="btn-primary">
                Home
            </Link>
        </Banner>
        </Hero>
    )
}
