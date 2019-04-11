import React, { Component } from 'react';
import {Container,
        Segment,
        Header,
        Button} from 'semantic-ui-react'


// Style
const jumbotronBodyDesktop={
    height:'70vh',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE',
    backgroundImage:'url(http://farmedhere.com.my/wp-content/uploads/2018/12/Banner_04.jpg)',
    backgroundSize:'cover'
}
const jumbotronBodyMobile={
    height:'50vh',
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
                <Segment style={isMobile? jumbotronBodyMobile:jumbotronBodyDesktop}>
                    <Container  textAlign='center'>
                            {/* Header */}
                            <Header style={isMobile? headerStyleMobile: headerStyleDesktop} as='h1'>This is FarmedHere</Header>
                            <Header.Content style={contentStyleDesktop}>URBAN GREENHOUSE FARMING</Header.Content>
                            <br/>
                            {/* Button */}
                            <Button color='green'>Contact Us</Button>
                    </Container>
                </Segment>
            </div>
        );
    }
}




export default Jumbotron;