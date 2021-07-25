import React from 'react';
import axios from 'axios';
import Icon from '../../assets/icon.index';

import './name-card.styles.css';

const NameCard = ({student, avatar}) => (
    <div className = 'name-card'>

        <div className = 'name-card-left'>
            <img className = 'avatar' src = {avatar} />
        </div>

        <div className = 'name-card-center'>
            <p 
                id = 'student-name'
                className = 'heading-third'
            >{student.name}
            </p>

            <p 
                id = 'student-witid'
                className = 'heading-fourth'
            >{student.wit_id}
            </p>
        </div>

        <div className = 'name-card-right'>
            <p 
                id = 'student-dpt'
                className = 'heading-third'
            >{student.graduation.department}
            </p>

            <p 
                id = 'student-year'
                className = 'heading-fourth'
            >{student.graduation.exp_year.split('-')[0]}
            </p>
        </div>

    </div>
)

export default NameCard;