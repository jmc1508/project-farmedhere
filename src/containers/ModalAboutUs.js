import React, { Component } from 'react';
import {Modal,
        Embed} from 'semantic-ui-react'




class ModalAboutUs extends Component {

    render() {
        const {showModalAboutUs,handleShowModalAboutUs}=this.props
        return (
            <div>
                <Modal open={showModalAboutUs} onClose={handleShowModalAboutUs} closeIcon>
                    <Modal.Header>Alvin on Astro AEC</Modal.Header>
                    <Embed id='O6Xo21L0ybE' source='youtube' />

                </Modal>
            </div>
        );
    }
}

export default ModalAboutUs;