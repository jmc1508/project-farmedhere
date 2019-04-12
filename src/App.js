import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navibar from './components/Navibar'
import AboutUs from './pages/AboutUs'
import OurProducts from './pages/OurProducts'
import Footer from './components/Footer'


class App extends Component {

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
        
        <Switch>
          <Route exact path="/" component={props=> <Homepage  isMobile={isMobile} {...props}/> } />
          <Route exact path="/our-products" component={props=> <OurProducts  isMobile={isMobile} {...props}/> } />
          <Route path="/about-us" component={props=> <AboutUs isMobile={isMobile} {...props}/>}/>

        </Switch>

        <Footer/>

      </div>
    );
  }
}

export default App
