import React from 'react';
import './ratingNumber.scss'
import Stars from "../stars/Stars";

function RatingNumber(props) {
    const {count, rating} = props

    let avg;

    return (
        <div className='rating-number'>
            <span className='rating-number__avg'></span>
            <Stars></Stars>
            <span className='rating-number__count'>Кількість коментарів: {``}</span>
        </div>
    )
}

export default RatingNumber;
