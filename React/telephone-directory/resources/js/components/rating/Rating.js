import React, {useEffect, useState} from 'react';
import './rating.scss'
import RatingLine from "./ratingLine/RatingLine";
import Stars from "./stars/Stars";
import NUMBER_CLASS_NAME from "../../_CONST";

function Rating(props) {
    const {data} = props
    const [total, setTotal] = useState();
    let starsContent = [], ratingLineContent = [];

    const getCurrentRating = (rating) => {
        return props.data.allRating.filter((item) => {
            return item.rating === rating
        }).length
    }

    for (let i = 5; i > 0; i--) {
        starsContent.push(<Stars count={i}/>)
        ratingLineContent.push(<RatingLine count={i} current={getCurrentRating(i)} total={data.countReview}/>)
    }

    return (
        <div className="rating">

            <div className={'rating__number'}>
                <span
                    className={`rating__number-title ${NUMBER_CLASS_NAME[4]}`}>{data.averageRating.toFixed(1)}</span>
                <Stars className={'rating__number-stars'} count={Math.round(data.averageRating)}
                       gray={true}/>
                <span className={'rating__number-comment'}>Кількість коментарів: {data.countReview}</span>
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
