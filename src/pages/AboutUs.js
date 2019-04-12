import React, { Component } from 'react';
import {Grid,
        Container,
        Divider,
        Header} from 'semantic-ui-react'

// Style

const gridBody={
    paddingTop:'70px',
    // height:'70vh',
}


class AboutUs extends Component {
    render() {
        const {isMobile}=this.props
        return (
            <div>
                <Grid stackable columns={4} style={gridBody}>
                    {/* About Farmed Here */}
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Container text fluid textAlign='center'>
                                <Header as ='h1'>
                                    ABOUT FARMEDHERE
                                </Header>

                                <p>FarmedHere is our ambition to become the pioneer of urban    greenhouse farming in Malaysia, focusing on Growing,        Processing and Distribution of food crops within an urban    city in a controlled greenhouse e
                                </p>
                                
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Why we do this */}
                    <Grid.Row columns={3} textAlign='center'>
                        <Grid.Column>
                            Row 2 
                        </Grid.Column>
                        <Grid.Column>
                            Row 2 
                        </Grid.Column>
                        <Grid.Column>
                            Row 2 
                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Our Vission & Mission */}

                    {/* Why we do this */}
                    <Grid.Row columns={4} textAlign='center'>
                        <Grid.Column>
                            Col 1 
                        </Grid.Column>
                        <Grid.Column>
                            Col 2 
                        </Grid.Column>
                        <Grid.Column>
                            Col 3 
                        </Grid.Column>
                        <Grid.Column>
                            Col 4 
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        );
    }
}

export default AboutUs;