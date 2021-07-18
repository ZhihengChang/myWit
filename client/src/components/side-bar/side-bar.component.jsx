import React from 'react';
import OPTIONS from './options.data';
import SidebarOption from '../side-bar-option/side-bar-option.component';
import './side-bar.styles.css';
import { isAuthorized } from '../../util/token';

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: OPTIONS
        }
    }

    render(){
        const options = this.state.options[this.props.page];
        const token = this.props.authToken;
        return (
            <div className='sidebar'>
                <ul>
                    {
                        options.map(({id, ...optionProps})=>{
                            let authorized = true;
                            if(!isAuthorized(token) && optionProps.label !== 'Home') {
                                authorized = false;
                            }
                            return (
                                <SidebarOption 
                                    key={id} 
                                    {...optionProps} 
                                    authorized={authorized}
                                />
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
};

export default SideBar;