import React from 'react';
import OPTIONS from './options.data';
import SidebarOption from '../side-bar-option/side-bar-option.component';
import './side-bar.styles.css';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: OPTIONS
        }
    }

    render(){
        return (
            <div className='sidebar'>
                <ul>
                    {
                        this.state.options.map(({id, ...optionProps})=>{
                            if(this.props.auth_token.length == 0 && optionProps.label != 'Home') 
                                optionProps.linkUrl = 'signin';
                            return (
                                <SidebarOption key={id} {...optionProps} />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default SideBar;