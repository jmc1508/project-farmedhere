import React, { Component } from 'react';
import {Menu,
        Icon,
        Button,
        Responsive,
        Sidebar,
        Segment} from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const NavBarItems=()=>(
    <>
        <Menu.Item>
            <Icon name='picture' size='small' />
            <Link to="#">Gallery</Link>
        </Menu.Item>

        <Menu.Item>
            <Icon name='leaf' size='small' />
            <Link to="/our-products">Our Products</Link>
        </Menu.Item>

        <Menu.Item >
            <Icon name='mail' size='small' />
            Contact Us
        </Menu.Item>

        <Menu.Item href="https://www.facebook.com/Tanjung-Nature-Farm-474159176394515/">
            <Icon name='facebook official' size='small' />
            Facebook
        </Menu.Item>
    </>
)



class Navibar extends Component {

    state={
        visible:false,
    }

    handleShowClick =()=> this.setState({visible:!this.state.visible})
    handleSidebarHide = () => this.setState({ visible: false })
    

    render() {

        const {visible}=this.state

        return (
            <div>
                <Responsive >
                    <Menu fixed='top'>
                    {/* NavBar Items - LHS */}
                        <Menu.Item>
                            <img src="http://farmedhere.com.my/wp-content/uploads/2019/01/farmedhere_logo-02.png"/>
                            <Link to="/">Homepage</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Icon name='info circle' size='large' />
                            <Link to="/about-us">About Us</Link>
                        </Menu.Item>
                    {/* NavBar Items - RHS */}
                        <Menu.Menu position ='right'>
                            <Menu.Item onClick={this.handleShowClick}>
                                <Icon name="sidebar"></Icon>
                            </Menu.Item>
                            <Sidebar
                                as={Menu}
                                vertical
                                animation='overlay'
                                width='thin'
                                direction='right'
                                visible={visible}
                                onHide={this.handleSidebarHide}
                                >
                                {/* NavBar Item */}
                                <NavBarItems/>
                            </Sidebar>                   
                        </Menu.Menu>
                    </Menu>
                </Responsive>
                

                {/* <Responsive minWidth={Responsive.onlyMobile.maxWidth}>
                    <Menu fixed='top'>
                        <Menu.Item>
                            <img src="http://farmedhere.com.my/wp-content/uploads/2019/01/farmedhere_logo-02.png"/>
                            <Link to="#">Homepage</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <Icon name='info circle' size='large' />
                            <Link to="#">About Us</Link>
                        </Menu.Item>
                        <Menu.Menu position ='right'>
                            <NavBarItems/>
                        </Menu.Menu>
                    </Menu>
                </Responsive> */}
            </div>
        );
    }
}

export default Navibar;
