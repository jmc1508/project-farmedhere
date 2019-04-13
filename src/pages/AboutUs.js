import React, { Component } from 'react';
import {Grid,
        Container,
        Divider,
        Header,
        Icon,
        Button,
        Image,
        List} from 'semantic-ui-react'
import logo_farmedHere from '../images/logo_farmedHere.ico'
import ProfilePhoto_Alvin from '../images/ProfilePhoto_Alvin.jpg'

// Style
const gridBody={
    marginTop:'14px',
}

const contentBody={
    paddingLeft:'30px',
    paddingRight:'30px'
}

const bannerHeaderDesktop={
    fontSize:'4em',
    color:'white'
}

const bannerHeaderMob={
    fontSize:'2em',
    color:'white'
}

// Render

class AboutUs extends Component {
    render() {
        // Props
        const {isMobile,handleShowModalAboutUs}=this.props
    
        // Image
        const logo=logo_farmedHere
        const profilePhoto=ProfilePhoto_Alvin
        return (
            <div >
                {/* Jumbotron */}
                <Container className={isMobile? 'containerBannerMob':'containerBannerDesktop'} fluid>
                    {/* Banner image */}
                    <div className='blockBanner'></div>
                    <Image src={logo} className='imageBanner' size='tiny'></Image>
                    {/* Header */}
                    <Header as='h1' className={isMobile?'headerBannerMob':'headerBannerDesktop'} style={isMobile?bannerHeaderMob:bannerHeaderDesktop} textAlign='center'>About FarmedHere</Header>      
                </Container>

                <Grid stackable columns={4} style={gridBody}>

                {/* Header - About FarmedHere*/}
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign='center'>
                            <Header as='h1'>Our Story</Header>
                        </Grid.Column>
                    </Grid.Row>

                {/* Content - About FarmedHere */}
                    <Grid.Row columns={1}> 
                        <Grid.Column>
                            <Container text textAlign='left'>
                            Established in 2017, FarmedHere is our ambition to become the pioneer of urban    greenhouse farming in Malaysia, focusing on Growing,   Processing and Distribution of food crops within an urban city in a controlled greenhouse environment.
                            </Container>

                            <br/>

                            <Container text textAlign='left'>
                            We plant the following:

                                <List bulleted>
                                    <br/>
                                    <List.Item><strong>Melons: </strong>Rockmelons, watermelons, passionfruits, etc</List.Item>
                                    <List.Item><strong>Vegetables: </strong>Greens, red leaves, coral, butterhead, etc</List.Item>
                                    <List.Item><strong>Potted plants: </strong>cactus, flowers, etc</List.Item>

                                </List>
                            </Container>
                        </Grid.Column>
                    </Grid.Row>

                <Divider></Divider>
                {/* Header - Our Motivation */}
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign='center'>
                            <Header as='h1'>Our Motivation</Header>
                        </Grid.Column>
                    </Grid.Row>


                {/* Content - Our Motivation*/}
                    <Grid.Row columns={3} textAlign='center'>
                        
                        <Grid.Column style={contentBody}>

                            <Header as ='h1'>1</Header>
                            <Header as = 'h3'>CROPS</Header>
                            <Container text fluid>
                            Obtain fresher and healthier crops than supermarket, with resident’s exclusive discount and priority quota.
                            </Container>

                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header as ='h1'>2</Header>
                            <Header as = 'h3'>ACTIVITIES</Header>
                            <Container text fluid>
                            Create a sense of belonging and family bonding with their own crops. To raise awareness and knowledge of sustainable farming.
                            </Container>

                        </Grid.Column>
                        <Grid.Column style={contentBody}>

                            <Header as ='h1'>3</Header>
                            <Header as = 'h3'>FARM YOUR OWN</Header>
                            <Container text fluid>
                            First hand experience and direct access to “FARM- Your-Own” concept by engaging them in seeding and harvesting process.
                            </Container>

                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Header - Our Vission & Mission */}
                    <Grid.Row columns={1}>
                        <Grid.Column textAlign='center'>
                            <Header as='h1'>Our Vision & Mission</Header>
                        </Grid.Column>
                    </Grid.Row>

                    {/*Header - Our Vission & Mission*/}
                    <Grid.Row columns={4} textAlign='center'>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='food' size ='big'></Icon>
                            </Header>
                            <Container text textAlign='center' fluid>
                            We are an urban city farm that focuses on cultivating the farm to table lifestyle. We want to provide a food source where the residents and consumers have first hand access.
                            </Container>

                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='heart' size ='big'></Icon>
                            </Header>
                            <Container text textAlign='center' fluid>
                            We aim to raise awareness on conscious diet, healthy living and responsible farming
                            </Container> 
                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='handshake' size ='big'></Icon>
                            </Header>
                            <Container text textAlign='center' fluid>
                            Our goal is to foster a sense of belonging among the residents here, as their community farm
                            </Container>  
                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header>
                                <Icon name='leaf' size ='big'></Icon>
                            </Header>
                        
                            <Container text textAlign='center' fluid>
                            We provide a space for family bonding through planting
                            </Container> 
                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Header - Our Consultant */}
                    
                    <Grid.Row columns={1}>
                        <Grid.Column >
                            <Header as='h1' textAlign='center'>
                                Our Consultant
                            </Header>
                        </Grid.Column>
                    </Grid.Row>

                    {/* Content - Our Consultant */}
                    
                    <Grid.Row columns={2} textAlign='center'>
                        <Grid.Column style={contentBody}>
                            <Image src={profilePhoto}/>
                        </Grid.Column>

                        <Grid.Column style={contentBody}>
                            <Container textAlign='justified'>
                                <Container text fluid><strong>Alvin Teh, our farming consultant, has a decade of farming experience under his belt.</strong>
                                </Container>

                                <br/>

                                <Container text fluid>A veteran for planting melons of various types, Alvin has delivered more than tens of thousands of watermelons and rock melons under his care. He advocates for sustainable farming and was featured twice on Astro AEC channel for his vision of responsible farming.
                                </Container>
                                <br/>
                                <Button color='teal' onClick={handleShowModalAboutUs}>View Video</Button>

                            </Container>

                        </Grid.Column>
                    </Grid.Row>

                    <Divider></Divider>

                    {/* Header - Our Consultant */}

                    <Grid.Row columns={1}>
                        <Grid.Column >
                            <Header as='h1' textAlign='center'>
                                Our Team
                            </Header>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns ={3} textAlign='center'>
                        <Grid.Column style={contentBody}>
                            <Header as='h4'>Ng Kien Yong & Lo Yeen Ann</Header>

                            <Container text fluid textAlign='center'>They have been involved in greenhouse farming in Cameron Highlands as well as crops and fertilizer trading business for more than 10 years.
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header as='h4'>Lewis Lim</Header>

                            <Container text fluid textAlign='center'>Lewis’ family runs Tanjung Nature Farm, our partnering farm in Batu Pahat, Johor. They are mainly involved in farming of watermelons, rock-melons and various type of vegetables.
                            </Container>
                        </Grid.Column>
                        <Grid.Column style={contentBody}>
                            <Header as='h4'>Lim Jet Li</Header>

                            <Container text fluid textAlign='center'>An accountant with many years of F&B outlet experience in Singapore
                            </Container>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default AboutUs;