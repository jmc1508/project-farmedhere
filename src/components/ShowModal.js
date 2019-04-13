import React, { Component } from 'react';

// Container
import ModalAboutUs from '../containers/ModalAboutUs'

class ShowModal extends Component {
    render() {
        
        const {showModalAboutUs,handleShowModalAboutUs}=this.props

        return (
            <div>
                {showModalAboutUs?
                <ModalAboutUs handleShowModalAboutUs={handleShowModalAboutUs} showModalAboutUs={showModalAboutUs}/>
                :null}
            </div>
        );
    }
}

export default ShowModal;