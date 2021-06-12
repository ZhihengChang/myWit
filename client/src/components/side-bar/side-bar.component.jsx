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
                linkUrl: '',
            },{
                id: 2,
                label: 'Moment',
                icon: 'plus',
                linkUrl: 'moment',
            },{
                id: 3,
                label: 'Profile',
                icon: 'user-circle',
                linkUrl: 'me',
            },{
                id: 4,
                label: 'Friends',
                icon: 'users',
                linkUrl: 'friends',
            },{
                id: 5,
                label: 'Apps',
                icon: 'window-restore',
                linkUrl: 'apps',
            }],
        }
    }

    render(){
        return (
            <div className='sidebar'>
                <ul>
                    {
                        this.state.options.map(({id, ...optionProps}) => (
                            <SidebarOption key={id} {...optionProps} />
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SideBar;