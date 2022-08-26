import React, {useEffect, useLayoutEffect, useState} from 'react';
import './comment.scss'
import report from '/assets/report.svg'
import Stars from "../../rating/stars/Stars";

function Comment(props) {
    const {id, review, rating, city, created_at} = props

    return (
        <div className={'comment'}>
            <div className={'comment__top-content'}>
                <Stars className={'comment__top-content-stars'} count={rating} gray={true} bg={true}/>
                <span className={'comment__top-content-date'}>{created_at}</span>
                <span className={'comment__top-content-city'}>{city}</span>

                <div className={'comment__top-content-nav'}>
                    <img className={'comment__top-content-nav-image'} src={report}/>
                </div>
            </div>
            <span className={'comment__bottom-text'}>{review}</span>
        </div>
    )


}

export default Comment;
