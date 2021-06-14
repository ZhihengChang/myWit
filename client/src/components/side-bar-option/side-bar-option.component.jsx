import React from 'react'
import Icon from '../../assets/icon.index'
import { withRouter } from 'react-router-dom';

const SidebarOption = ({label, icon, linkUrl, history, match}) => (
    <li>
        <div
        className={label.split(' ').join('')}
        onClick={() => history.push(`${match.url}${linkUrl}`)} 
        >
            <Icon name={icon} width={10}/>
            <span className='nav--name'>{label}</span>
        </div>
    </li>
)

export default withRouter(SidebarOption);