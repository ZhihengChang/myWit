import React from 'react'

const SidebarOption = (props) => (
    <li>
        <a 
        onClick={async (event)=>{
            event.preventDefault();
        }}
        className={props.label.split(' ').join('')} href={props.api}>
            <span className='nav--name'>{props.label}</span>
        </a>
    </li>
)

export default SidebarOption;