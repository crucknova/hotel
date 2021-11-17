import React from "react";
import "./Roomlist.css"
import {Link} from "react-router-dom";
import img8 from "../images/room-8.jpeg";
import img9 from "../images/room-12.jpeg";
import img10 from "../images/details-1.jpeg";


class Card1 extends React.Component {
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

class Totalfloat extends React.Component {
    render() {
        return (

            <div className= 'abcde'>
                <Link to="/rooms/double-deluxe" style={{textDecoration:"none"}}>
                    <div className='cards1'>
                        <Card1
                            img={img8}
                            title='Double Deluxe'
                            para='You can experience a new level of resort experience with out special made beach view for our valued customers'
                            author='Cruck Nova'
                        />

                    </div>
                </Link>

                <Link to="/rooms/family-deluxe" style={{textDecoration:"none"}}>
                    <div className='cards1'>
                        <Card1
                            img={img9}
                            title='Family Deluxe'
                            para='You and your family can enjoy the Beautiful View from the beach side of the resort to get the maximum  buck for bang.'
                            author='Cruck Nova' />
                    </div>
                </Link>
                <Link to="/rooms/presidential" style={{textDecoration:"none"}}>
                    <div className='cards1'>
                        <Card1
                            img={img10}
                            title='Presidential Suite'
                            para='With the Presidential Suite , you can get the most out of the resort, where you have 100% access to any thing on this hotel. But it comes with a price'
                            author='Cruck Nova' />
                    </div>
                </Link>
                <Link to="/rooms/single-deluxe" style={{textDecoration:"none"}}>
                    <div className='cards1'>
                        <Card1
                            img={img9}
                            title='Single Deluxe'
                            para='You can enjoy the Beautiful View from the beach side of the resort to get the maximum  buck for bang.'
                            author='Cruck Nova' />
                    </div>
                </Link>
            </div>

        )
    }
}


export default Totalfloat;