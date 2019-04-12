import React, { Component } from 'react';
import {Segment,
        Container,
        Grid,
        Divider} from 'semantic-ui-react'
import Jumbotron from '../components/Jumbotron';
import SellingPoint from '../components/SellingPoint'
import Footer from '../components/Footer'

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