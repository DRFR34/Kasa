import React from 'react'

import './Rating.scss'
import activeStar from '../../src/assets/images/star-active.svg'
import inactiveStar from '../../src/assets/images/star-inactive.svg'

export default function Rating({score}) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        stars.push(
            <div className='starBox' key={i}>
                <img src={i < score ? activeStar : inactiveStar} alt="star" />
            </div>
        );
    }

    return (
        <div className='ratingBox'>
            {stars}
        </div>
    );
}
