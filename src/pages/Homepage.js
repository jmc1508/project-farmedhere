import React, { Component } from 'react';
import Navibar from '../components/Navibar'
import Jumbotron from '../components/Jumbotron';
import SellingPoint from '../components/SellingPoint'
import { Responsive } from 'semantic-ui-react';

class Homepage extends Component {

    state ={
        width:window.innerWidth
    }

    componentDidMount() {
        window.addEventListener('resize',this.handleWindowSizeChange)
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.handleWindowSizeChange)
    }
    
    handleWindowSizeChange=()=>{
        this.setState({width:window.innerWidth})
    }

    render() {
        
        const {width}=this.state
        const isMobile=width<=500

        return (
            <div>
                {/* Navibar */}
                <Navibar/>
                {/* Jumbotron */}
                <Jumbotron isMobile={isMobile}/>
                {/* SellingPoint */}
                <SellingPoint isMobile={isMobile}/>
            </div>
        );
    }
}


export default Homepage;