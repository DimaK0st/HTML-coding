import React from 'react';
import './rating.scss'
import RatingLine from "./ratingLine/RatingLine";
import Stars from "./stars/Stars";

function Rating(props) {



    return (
        <div className="rating">
            <div className={'rating__number-wrapper'}></div>
            <Stars count={5}/>
            <Stars count={4}/>
            <Stars count={3}/>
            <Stars count={2}/>
            <Stars count={1}/>

            <div style={{width: '400px'}}>
                <RatingLine count={5} current={14} total={36}/>
                <RatingLine count={4} current={0} total={36}/>
                <RatingLine count={3} current={7} total={36}/>
                <RatingLine count={2} current={0} total={36}/>
                <RatingLine count={1} current={15} total={36}/>
            </div>
        </div>
    )
}

export default Rating;
