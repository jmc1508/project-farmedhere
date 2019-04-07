import React, { Component } from 'react';
import {Menu,
        Icon,
        } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


class Navibar extends Component {
    render() {
        return (
            <div>
                <Menu fixed='top' >
                    {/* Homepage */}
                    <Menu.Item>
                        <img src="http://farmedhere.com.my/wp-content/uploads/2019/01/farmedhere_logo-02.png"/>
                        <Link to="#">Homepage</Link>
                    </Menu.Item>

                    {/* About Us */}
                    <Menu.Item>
                        <Icon name='info circle' size='large' />
                        <Link to="#">About Us</Link>
                    </Menu.Item>

                    {/* Gallery */}
                    <Menu.Item position='right'>
                        <Icon name='picture' size='large' />
                        <Link to="#">Gallery</Link>
                    </Menu.Item>

                    {/* Our Product */}
                    <Menu.Item>
                        <Icon name='leaf' size='large' />
                        <Link to="#">Our Products</Link>
                    </Menu.Item>

                    {/* Contact Us */}
                    <Menu.Item >
                        <Icon name='mail' size='large' />
                        Contact Us
                    </Menu.Item>

                    {/* Facebook */}
                    <Menu.Item href="https://www.facebook.com/Tanjung-Nature-Farm-474159176394515/">
                       <Icon name='facebook official' size='large' />
                        Facebook
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navibar;