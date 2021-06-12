import React from 'react'
import { withRouter } from 'react-router-dom';

const SidebarOption = ({label, icon, linkUrl, history, match}) => (
    <li>
        <div
        className={label.split(' ').join('')}
        onClick={() => history.push(`${match.url}${linkUrl}`)} 
        >
            <span className='nav--name'>{label}</span>
        </div>
    </li>
)

export default withRouter(SidebarOption);