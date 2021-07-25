import React from 'react';
import Icon from '../../assets/icon.index'

import './modal.styles.css';
import './profile-info-modal.styles.css';

const ProfileInfoModal = ({student, close}) => (
    <div className='webmodal'>
        <div className='modal-profile-info'>
            <div className='modal-header'>
                <span className='modal-title'>
                    <Icon name='information' width={10} fill={"white"} className={"icon"}/>
                    Student Information
                </span>
                <span className='modal-close' onClick={close}>
                    <Icon name='close' width={10} fill={"white"} className={"close"}/>
                </span>
            </div>
            <div className='profile-info-content'>
                <table className='profile-info-table'>
                    <tr>
                        <td className='rowname'>Major</td>
                        <td>{student.curriculum_info[0].Major}</td>
                    </tr>
                    <tr>
                        <td className='rowname'>Level</td>
                        <td>{student.curriculum_info[0].level}</td>
                    </tr>
                    <tr>
                        <td className='rowname'>Class</td>
                        <td>{student.curriculum_info[0].class}</td>
                    </tr>
                    <tr>
                        <td className='rowname'>Status</td>
                        <td>{student.curriculum_info[0].status}</td>
                    </tr>
                    <tr>
                        <td className='rowname'>Email</td>
                        <td>{student.contact.wit_email}</td>
                    </tr>
                    <tr>
                        <td className='rowname'>Birthday</td>
                        <td>{new Date(student.date_of_birth).toDateString()}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
);

export default ProfileInfoModal;