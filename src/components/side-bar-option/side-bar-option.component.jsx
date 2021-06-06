import React from 'react'

const SidebarOption = (props) => (

    // a(class=`${label.split(' ').join('')}`, href=`${api}`)
    //     span.nav--icon
    //         i(class= `fa fa-${icon}` aria-hidden='true')
    //     span.nav--name= label
    <li>
        <a className={props.label.split(' ').join('')} href={props.api}>
            <span className='nav--name'>{props.label}</span>
        </a>
    </li>
)

export default SidebarOption;