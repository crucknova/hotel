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
                    <p>{this.props.para}</p>
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
                        title='Double Delux'
                        para='You can experience a new level of resort experience with out special made beach view for our valued customers'
                        author='Cruck Nova'
                    />

                </div>
            </Link>

                <Link to="/rooms" style={{textDecoration:"none"}}>

                <div className='cards'>
                    <Card
                        img={img9}
                        title='Family Delux'
                        para='You and your family can enjoy the Beautiful View from the beach side of the resort to get the maximim  buck for bang.'
                        author='Cruck Nova' />
                </div>
                </Link>
                <Link to="/rooms" style={{textDecoration:"none"}}>
                <div className='cards'>
                    <Card
                        img={img10}
                        title='Presidential Suite'
                        author='Cruck Nova' />
                </div>
                </Link>
            </div>

        )
    }
}


export default Float;