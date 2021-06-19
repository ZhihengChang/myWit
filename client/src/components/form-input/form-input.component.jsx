import React from 'react';

import Icon from '../../assets/icon.index';

import './form-input.styles.scss';

const FormInput = ({ icon, fill, handleChange, label, ...otherProps }) => (
    <div className='group'>
        
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label? (
                <label className={`${otherProps.value.length? 'shrink': ''} form-input-label`}>
                    {label}
                </label>
            ) : null
        }
        <Icon name={icon} width={10} fill={fill}/>
    </div>
);

export default FormInput;