import React, { Component } from 'react';
import {Grid,
        Container,
        Divider,
        Header,
        Icon,
        List,
        Image} from 'semantic-ui-react'
import logo_farmedHere from '../images/logo_farmedHere.ico'
import banner_aboutUs from '../images/banner_aboutUs.jpg'

// Style



const gridBody={
    paddingTop:'70px',
}

const contentBody={
    paddingLeft:'30px',
    paddingRight:'30px'
}





{/* <img src="http://farmedhere.com.my/wp-content/uploads/2019/01/farmedhere_logo-02.png"/> */}
class AboutUs extends Component {
    render() {
        const {isMobile}=this.props
        const logo=logo_farmedHere
        const banner=banner_aboutUs
        return (
            <div >
                <Grid stackable columns={4} style={gridBody}>
                <Image src={logo} centered/>
                    {/* About Farmed Here */}
                    <Grid.Row columns={1} >
                        <Grid.Column>
                            <Container text fluid textAlign='justified'>
                                <Header as ='h1' textAlign='center'>
                                    ABOUT FARMEDHERE
                                </Header>

                                <p>FarmedHere is our ambition to become the pioneer of urban    greenhouse farming in Malaysia, focusing on Growing,        Processing and Distribution of food crops within an urban    city in a controlled greenhouse environment.
                                </p>

                                <List bulleted>
                                    <List.Header><strong>What do we plant?</strong></List.Header>

                                    <List.Item><strong>Fruits:</strong> Rockmelons, watermelons,     passionfruits, etc</List.Item>

                                    <List.Item><strong>Vegetables:</strong>: Leafy vegetables such as greens, red leaves, coral, butterhead, etc</List.Item>

                                    <List.Item><strong>Potted Plants:</strong> Potted plants including cactus, flowers, etc</List.Item>
                                </List>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Header - Why we do this */}
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign='center'>
                            <Header as='h1'>OUR MOTIVATION</Header>
                        </Grid.Column>
                    </Grid.Row>


                    {/* Content - Why we do this */}
                    <Grid.Row columns={3} textAlign='center' divided>
                        
                        <Grid.Column style={contentBody}>

                            <Header as ='h1'>1</Header>
                            <Header as = 'h3'>CROPS</Header>
                            <p>
                            Obtain fresher and healthier crops than supermarket, with resident’s exclusive discount and priority quota.
                            </p>

                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header as ='h1'>2</Header>
                            <Header as = 'h3'>ACTIVITIES</Header>
                            <p>
                            Create a sense of belonging and family bonding with their own crops. To raise awareness and knowledge of sustainable farming.
                            </p>

                        </Grid.Column>
                        <Grid.Column style={contentBody}>

                            <Header as ='h1'>3</Header>
                            <Header as = 'h3'>FARM YOUR OWN</Header>
                            <p>
                            First hand experience and direct access to “FARM- Your-Own” concept by engaging them in seeding and harvesting process.
                            </p>

                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Header - Our Vission & Mission */}
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign='center'>
                            <Header as='h1'>OUR VISION & MISSION</Header>
                        </Grid.Column>
                    </Grid.Row>

                    {/*Header - Our Vission & Mission*/}
                    <Grid.Row columns={4} textAlign='center'>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='food' size ='big'></Icon>
                            </Header>
                            <p>
                            We are an urban city farm that focuses on cultivating the farm to table lifestyle. We want to provide a food source where the residents and consumers have first hand access.
                            </p>

                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='heart' size ='big'></Icon>
                            </Header>
                            <p>
                            We aim to raise awareness on conscious diet, healthy living and responsible farming
                            </p> 
                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='handshake' size ='big'></Icon>
                            </Header>
                            <p>
                            Our goal is to foster a sense of belonging among the residents here, as their community farm
                            </p>  
                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='leaf' size ='big'></Icon>
                            </Header>
                        
                            <p>
                            We provide a space for family bonding through planting
                            </p> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default AboutUs;