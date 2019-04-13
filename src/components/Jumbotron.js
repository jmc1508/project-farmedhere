import React, { Component } from 'react';
import {Container,
        Segment,
        Header,
        Button} from 'semantic-ui-react'


// Style
const jumbotronBodyDesktop={
    height:'500px',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE',
    backgroundImage:'url(http://farmedhere.com.my/wp-content/uploads/2018/12/Banner_04.jpg)',
    backgroundSize:'cover',
}
const jumbotronBodyMobile={
    height:'250px',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE',
    backgroundImage:'url(http://farmedhere.com.my/wp-content/uploads/2018/12/Banner_04.jpg)',
    backgroundSize:'cover'
}

const headerStyleDesktop={
    fontSize:'4em',
    marginTop:'2em',
    color:'white'
}

const headerStyleMobile={
    fontSize:'2em',
    marginTop:'2em',
    color:'white'
}

const contentStyleDesktop={
    color:'white'
}

// Render
class Jumbotron extends Component {

    render() {
        const {isMobile}= this.props
        
        return (
            <div >
                <Container textAlign='center' fluid style={isMobile? jumbotronBodyMobile:jumbotronBodyDesktop}>
                    
                    {/* Header */}
                    <Header style={isMobile? headerStyleMobile: headerStyleDesktop} as='h1'>This is FarmedHere</Header>
                    <Header.Content style={contentStyleDesktop}>URBAN GREENHOUSE FARMING</Header.Content>
                    <br/>
                    {/* Button */}
                    <Button color='green'>Contact Us</Button>
                </Container>
            </div>
        );
    }
}




export default Jumbotron;