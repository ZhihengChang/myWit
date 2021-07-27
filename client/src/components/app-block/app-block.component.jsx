import React from 'react';
import Icon from '../../assets/icon.index';
import { Link } from 'react-router-dom';

import './app-block.styles.css';

const AppBlock = ({label, icon, path, fill, color}) => (
    <div className='app'>
        <Link className='app-wrapper' to={{ pathname: path}} target='_blank'>
            <div className='app-block' style={{backgroundColor: fill}}>
                <Icon name={icon} width={10} className='app-icon' fill={color}/>
            </div>
        </Link>
        {label}
    </div>
)

export default AppBlock;