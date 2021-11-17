import React from 'react'
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import img2 from "../../images/details-2.jpeg";
import img3 from "../../images/details-3.jpeg";
import img4 from "../../images/details-4.jpeg";
import "../../App.css"




export default function Presidential() {
    return (
        <>
            <Hero hero='roomsHero'>
                <Banner title="Presidential">
                </Banner>
            </Hero>
            <div className='single-room'>
                <div className="single-room-images">
                    <img src={img2} alt="Presidential"/>
                    <img src={img3} alt="Presidential"/>
                    <img src={img4} alt="Presidential"/>
                </div>
                <div className="single-room-info">
                    <article className="desc"><h3>details</h3><p>Street art edison bulb gluten-free, tofu try-hard
                        lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art
                        party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile
                        cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch
                        stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud
                        bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag
                        vice, sartorial before they sold out pok pok health goth trust fund cray.</p></article>
                    <article className="info"><h3>info</h3><h6>price : $400</h6><h6>size : 500 SQFT</h6><h6>max capacity
                        :2 people</h6><h6>pets allowed</h6><h6>free breakfast included</h6></article>
                </div>

                <section className="room-extras"><h6>extras </h6>
                    <ul className="extras">
                        <li>- Plush pillows and breathable bed linens</li>
                        <li>- Soft, oversized bath towels</li>
                        <li>- Full-sized, pH-balanced toiletries</li>
                        <li>- Complimentary refreshments</li>
                        <li>- Adequate safety/security</li>
                        <li>- Internet</li>
                        <li>- Comfortable beds</li>
                    </ul>
                </section>
            </div>
        </>
    )
}
