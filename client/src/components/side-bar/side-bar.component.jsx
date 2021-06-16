import React from 'react';
import OPTIONS from './options.data';
import SidebarOption from '../side-bar-option/side-bar-option.component';
import './side-bar.styles.css';

class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {
            options: OPTIONS
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