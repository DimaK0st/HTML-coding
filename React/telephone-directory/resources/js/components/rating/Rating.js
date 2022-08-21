import React from 'react';
import './rating.scss'
import RatingLine from "./ratingLine/RatingLine";
import Stars from "./stars/Stars";
import NUMBER_CLASS_NAME from "../../_CONST";

function Rating(props) {
    const {data}=props

    return (
        <div className="rating">

            <div className={'rating__number'}>
                <span className={`rating__number-title ${NUMBER_CLASS_NAME[4]}`}>{data.averageRating}</span>
                <Stars className={'rating__number-stars'} count={data.averageRating} gray={true}/>
                <span className={'rating__number-comment'}>Кількість коментарів: {data.allRating.length}</span>
            </div>

            <div className={'rating__line'}>

                    <div className={'rating__line-stars'}>
                        <Stars count={5}/>
                        <Stars count={4}/>
                        <Stars count={3}/>
                        <Stars count={2}/>
                        <Stars count={1}/>
                    </div>

                    <div className={'rating__line-line'}>
                        <RatingLine count={5} current={14} total={36}/>
                        <RatingLine count={4} current={0} total={36}/>
                        <RatingLine count={3} current={7} total={36}/>
                        <RatingLine count={2} current={0} total={36}/>
                        <RatingLine count={1} current={15} total={36}/>
                    </div>
            </div>


        </div>
    )
}

export default Rating;
