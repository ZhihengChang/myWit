import React from 'react';
import Icon from '../../assets/icon.index'

import './modal.styles.css';

const ProfileInfoModal = (props) => (
    <div className='webmodal'>
        <div className='modal-profile-info'>
            <div className='modal-header'>
                <span className='modal-title'>
                    <Icon name='pen' width={10} fill={"white"} className={"icon"}/>
                    Student Information
                </span>
                <span className='modal-close' onClick={props.close}>
                    <Icon name='close' width={10} fill={"white"} className={"close"}/>
                </span>
            </div>
            <div className='modal-footer'>
                
            </div>
        </div>
    </div>
);

export default ProfileInfoModal;