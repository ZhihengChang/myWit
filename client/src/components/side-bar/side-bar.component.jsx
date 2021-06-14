import React from 'react';
import OPTIONS from './options.data';
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
            },
            // {
            //     id: 6,
            //     label: 'About',
            //     icon: 'info',
            //     linkUrl: 'About',
            // }
        ],

            }]
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