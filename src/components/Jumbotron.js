import React, { Component } from 'react';
import {Container,
        Header} from 'semantic-ui-react'

// Style
const jumbotronBody={
    height:'70vh',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE',

}

const jumbotronContent={
    backgroundColor:'red',
    marginTop:'8em',
    marginBottom:'0'
}

const headerStyle={
    fontSize:'4em',
}

class Jumbotron extends Component {
    render() {
        return (
            <div >
                <Container style={jumbotronBody} fluid>
                    <Container textAlign='center' text style={jumbotronContent} >
                        <Header style={headerStyle} as='h1'>This is FarmedHere</Header>
                        <Header.Content>URBAN GREENHOUSE FARMING</Header.Content>
                    </Container>
                </Container>
            </div>
        );
    }
}

export default Jumbotron;