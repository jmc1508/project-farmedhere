import React, { Component } from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Navibar from './components/Navibar'
import AboutUs from './pages/AboutUs'
import OurProducts from './pages/OurProducts'
import Footer from './components/Footer'
import ShowModal from './components/ShowModal'


class App extends Component {

    state ={
      width:window.innerWidth,
      showModal:false,
      showModalAboutUs:false
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

    // Modal - toggle
    handleShowModalAboutUs=()=>{
      this.setState({
        showModal:!this.state.showModal,
        showModalAboutUs:!this.state.showModalAboutUs})
    }

  render() {

    const {width,showModalAboutUs,showModal}=this.state
    const isMobile=width<=500

    return (
      <div>
        {/* Modal - About Us*/}
        {showModal?<ShowModal handleShowModalAboutUs={this.handleShowModalAboutUs} showModalAboutUs={showModalAboutUs}/>:null}

        {/* Navibar */}
        <Navibar/>
        
        <Switch>
          <Route exact path="/" component={props=> <Homepage  isMobile={isMobile} {...props}/> } />
          <Route exact path="/our-products" component={props=> <OurProducts  isMobile={isMobile} {...props}/> } />
          <Route path="/about-us" component={props=> <AboutUs handleShowModalAboutUs={this.handleShowModalAboutUs} isMobile={isMobile} {...props}/>}/>
        </Switch>

        <Footer/>

      </div>
    );
  }
}

export default App
