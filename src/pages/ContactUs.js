import React, { Component } from 'react';
import Jumbotron from '../components/Jumbotron'
import {Grid,
        Container} from 'semantic-ui-react'
import GoogleMap from '../containers/GoogleMap'

class ContactUs extends Component {
    render() {
        return (
            <div>
                <Jumbotron/>

                <Container text textAlign='center'>
                    <h1>CONTACT US PAGE</h1>
                </Container>

                {/* Map and Contact Us Form */}
                <Grid>
                    <Grid.Row columns={2} textAlign='center'>
                
                {/* GoogleMaps */}
                        <Grid.Column>
                            <GoogleMap/>
                        </Grid.Column>

                        <Grid.Column>
                            <h1>Email Form</h1>
                        </Grid.Column>

                        

                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ContactUs;   