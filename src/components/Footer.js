import React, { Component } from 'react';
import {Container, Header} from 'semantic-ui-react'

// Style
const footerBody={
    height:'20vh',
    backgroundColor:'#d3d3d3',
    marginTop:'20px'
}

const textBody={
    paddingTop:'4em',
    color:'white'
}

class Footer extends Component {
    render() {
        return (
            <div>
                <Container style={footerBody} fluid>
                    <Container text textAlign='center'>
                        <Header as='h4' style={textBody} >
                            © 2019 FarmedHere Sdn Bhd. All rights reserved.
                        </Header>
                    </Container>
                </Container>

            </div>
        );
    }
}

export default Footer;