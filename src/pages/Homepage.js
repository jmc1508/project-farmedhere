import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron';
import SellingPoint from '../components/SellingPoint'

class Homepage extends Component {

    render() {
        
        const {isMobile}=this.props

        return (
            <div>
                {/* Jumbotron */}
                <Jumbotron isMobile={isMobile}/>

                {/* SellingPoint */}
                <SellingPoint isMobile={isMobile}/>
                   
            </div>
        );
    }
}


export default Homepage;