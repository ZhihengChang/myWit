import React from 'react'
import Icon from '../../assets/icon.index'
import showAlert from '../../util/alert';
import { withRouter } from 'react-router-dom';

const SidebarOption = ({label, icon, linkUrl, history, authorized, onclick}) => (
    <li>
        <div
            className={label.split(' ').join('')}
            onClick={() => {
                if(authorized){
                    if(onclick) onclick();
                    else history.push(`${linkUrl}`);
                }else{
                    showAlert('error', 'Please sign in');
                }
            }} 
        >
            <Icon name={icon.toLowerCase()} width={10} />
            <span className='nav--name'>{label}</span>
        </div>
    </li>
)

export default withRouter(SidebarOption);