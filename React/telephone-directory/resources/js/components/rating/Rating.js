import React, {useEffect, useState} from 'react';
import './rating.scss'
import RatingLine from "./ratingLine/RatingLine";
import Stars from "./stars/Stars";
import NUMBER_CLASS_NAME from "../../_CONST";

function Rating(props) {
    const {rating} = props
    const [total, setTotal] = useState();
    let starsContent = [], ratingLineContent = [];



    const getCurrentRating = (rate) => {

        return rating.group.filter((item) => {
            return item.rating === rate
        })[0]['rating_count']
    }

    for (let i = 5; i > 0; i--) {
        starsContent.push(<Stars count={i}/>)
        ratingLineContent.push(<RatingLine count={i} current={getCurrentRating(i)} total={rating.count}/>)
    }

    return (
        <div className="rating">

            <div className={'rating__number'}>
                <span
                    className={`rating__number-title ${NUMBER_CLASS_NAME[4]}`}>{parseFloat(rating.average).toFixed(1)}</span>
                <Stars className={'rating__number-stars'} count={Math.round(parseFloat(rating.average))}
                       gray={true}/>
                <span className={'rating__number-comment'}>Кількість оцінок: </span><span className={'rating__number-comment'}>{rating.count}</span>
            </div>

            <div className={'rating__line'}>

                <div className={'rating__line-stars'}>
                    {starsContent}
                </div>

                <div className={'rating__line-line'}>
                    {ratingLineContent}
                </div>
            </div>


        </div>
    )
}

export default Rating;
