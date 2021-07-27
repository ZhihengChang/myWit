import React from 'react';
import APPS from './app.data';
import AppBlock from '../app-block/app-block.component';
import './app-list.styles.css';

class AppList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apps: APPS
        }
    }

    render(){
        const apps = this.state.apps;
        return (
            <div className='app-list'>
                {
                    apps.map(({id, ...appProps})=>(
                        <AppBlock key={id} {...appProps}/>
                    ))
                }
            </div>
        )
    }
};

export default AppList;