import React from "react";
import "./Context.css"
import {Link} from "react-router-dom";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-12.jpeg";
import img10 from "./images/details-1.jpeg";


class Card extends React.Component {
    render() {
        return(
            <div className="card">
                <img src={this.props.img} />
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    {/*<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>*/}
                    <h5>{this.props.author}</h5>
                </div>
            </div>
        )
    }
}

class Float extends React.Component {
    render() {
        return (

            <div className= 'abcd'>
                <Link to="/rooms" style={{textDecoration:"none"}}>

                <div className='cards'>


                    <Card
                        img={img8}
                        title='What I learned from my visit to The Upside Down'
                        author='Nancy Wheeler'

                    />



                </div>
            </Link>

                <div className='cards'>
                    <Card
                        img={img9}
                        title='What I learned from my visit to The Upside Down'
                        author='dNancy Wheeler' />
                </div>
                <div className='cards'>
                    <Card
                        img={img10}
                        title='What I learned from my visit to The Upside Down'
                        author='Nancy Wheeler' />
                </div>


            </div>

        )
    }
}


export default Float;