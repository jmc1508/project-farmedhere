import React, { Component } from 'react';
import {Container,
        Segment,
        Header,
        Responsive,
        Button} from 'semantic-ui-react'


// Style
const jumbotronBodyDesktop={
    height:'70vh',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE',
}
const jumbotronBodyMobile={
    height:'35vh',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE',
}

const headerStyleDesktop={
    fontSize:'4em',
    marginTop:'2em'
}

const headerStyleMobile={
    fontSize:'2em',
    marginTop:'1em',
}
// Render
class Jumbotron extends Component {

    state={
        mobile:'',
    }

    handleOnUpdate=()=>{
        this.setState({mobile:'true'})
    }
    render() {

        const {isMobile}= this.props
        
        
        return (
            <div >
                <Container style={isMobile? jumbotronBodyMobile:jumbotronBodyDesktop} text textAlign='center'>
                    <Header style={isMobile? headerStyleMobile: headerStyleDesktop} as='h1'>This is FarmedHere</Header>
                    <Header.Content>URBAN GREENHOUSE FARMING</Header.Content>
                </Container>
            </div>
        );
    }
}




export default Jumbotron;