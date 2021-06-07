import React from 'react';
import SidebarOption from '../side-bar-option/side-bar-option.component';
import './side-bar.styles.css';

class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {
            options: [{
                id: 1,
                label: 'Home',
                icon: 'home',
                api: '/',
            },{
                id: 2,
                label: 'Moment',
                icon: 'plus',
                api: '#',
            },{
                id: 3,
                label: 'Profile',
                icon: 'user-circle',
                api: '/me',
            },{
                id: 4,
                label: 'Friends',
                icon: 'users',
                api: '/friends',
            },{
                id: 5,
                label: 'Apps',
                icon: 'window-restore',
                api: '/apps',
            },{
                id: 6,
                label: 'Sign out',
                icon: 'sign-out',
                api: '#',
            }],
        }
    }

    render(){
        return (
            <div className='sidebar'>
                <ul>
                    {
                        this.state.options.map(({id, label, icon, api}) => (
                            <SidebarOption key={id} icon={icon} label={label} api={api} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SideBar;