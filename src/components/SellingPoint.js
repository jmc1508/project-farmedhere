import React, { Component } from 'react';
import {Grid,
        Icon,
        Header} from 'semantic-ui-react'

// Style
const gridBody={
    height:'40vh',
}

const gridColumn={
    paddingTop:'20px',
    paddingLeft:'60px',
    paddingRight:'60px'
}

const headerHeight={
    height:'40px'
}

const gridContent={
    height:'20%',
}


// Render
class SellingPoint extends Component {
    render() {
        return (
            <Grid style={gridBody} columns={3} divided stackable>
                <Grid.Row >
                {/* Column 1 - Minimal Pesticides */}
                    <Grid.Column style={gridColumn} textAlign='center'>
                            <Icon name='leaf' size ='big'></Icon>
                            <Header as='h4' style={headerHeight}>
                                MINIMAL USE OF PESTICIDES
                            </Header>

                            <p>
                                Verified with lab testing results on toxins and chemicals, our use of pesticide during farming is minimal, 90% less than the traditional farming method.
                            </p>
                    </Grid.Column>
                {/* Column 2 - Friendly Farming */}
                    <Grid.Column style={gridColumn} textAlign='center'>
                            <Icon name='thumbs up' size ='big'></Icon>
                            
                            <Header as='h4' style={headerHeight}>
                                FRIENDLY AND RESPONSIBLE FARMING
                            </Header>

                            <p>
                                We ensure total transparency and cleanliness in our farm,by welcoming the general public to come and experience the fun with us
                            </p>
                    </Grid.Column>
                {/* Column 3 - Premium Quality */}
                    <Grid.Column style={gridColumn} textAlign='center'>
                            <Icon name='star' size ='big'></Icon>
                            
                            <Header as='h4' style={headerHeight}>
                                PREMIUM QUALITY AT AN AFFORDABLE PRICE
                            </Header>

                            <p>
                                The world renowned Hokkaido and Yubari Melons from Japan have recorded the highest brix level of 18% in sweetness. The brix level of our melons is up to 16%.
                            </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default SellingPoint;