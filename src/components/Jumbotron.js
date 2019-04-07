import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react'

// Style
const jumbotronBody={
    height:'70vh',
    paddingTop:'68px',
    backgroundColor:'#AFEEEE'
}


class Jumbotron extends Component {
    render() {
        return (
            <div style={jumbotronBody}>
                <Grid columns='3' centered>
                    <Grid.Row>
                        {/* Col 1 */}
                        <Grid.Column width='2'>
                            COl 1
                        </Grid.Column>
                        {/* Col 2 */}
                        <Grid.Column width='12' textAlign='center'>
                            <h1>This is FarmedHere</h1>
                        </Grid.Column>
                        {/* Col 3 */}
                        <Grid.Column width='2'>
                            Col 3
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default Jumbotron;