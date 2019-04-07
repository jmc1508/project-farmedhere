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
                        <Icon name='home' size='large' />
                        <Link to="#">Homepage</Link>
                    </Menu.Item>

                    {/* Contact Us */}
                    <Menu.Item>
                        Contact Us
                    </Menu.Item>
                    {/* Twitter */}
                    <Menu.Item>
                        Twitter
                    </Menu.Item>
                    {/* Facebook */}
                    <Menu.Item>
                        Facebook
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Navibar;