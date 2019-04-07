import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

// Style
const jumbotronBody={
    height:'70vh',
    paddingTop:'68px',
    backgroundImage:'url(http://farmedhere.com.my/wp-content/uploads/2018/12/Banner_04.jpg)',
}

const gridBody={
    backgroundColor:'teal',
    height:'100%'
}


class Jumbotron extends Component {
    render() {
        return (
            <div style={jumbotronBody}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column>

                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Jumbotron;