import React, { Component } from 'react';
import Navibar from '../components/Navibar'
import Jumbotron from '../components/Jumbotron';
import SellingPoint from '../components/SellingPoint'

class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Navibar */}
                <Navibar/>
                {/* Jumbotron */}
                <Jumbotron/>
                {/* SellingPoint */}
                <SellingPoint/>
            </div>
        );
    }
}


export default Homepage;