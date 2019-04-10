import React, { Component } from 'react';
import Navibar from '../components/Navibar'
import Jumbotron from '../components/Jumbotron';




class Homepage extends Component {
    render() {
        return (
            <div>
                {/* Navibar */}
                <Navibar/>
                {/* Jumbotron */}
                <Jumbotron/>
            </div>
        );
    }
}


export default Homepage;