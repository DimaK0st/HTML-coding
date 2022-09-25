import React, {useEffect, useLayoutEffect, useState} from 'react';
import './comment.scss'
import report from '/assets/report.svg'
import Stars from "../../tab-rating-and-view/rating/stars/Stars";
import Skeleton from "react-loading-skeleton";
import moment from "moment-timezone";

function  Comment(props) {
    const {id, review, rating, city, created_at, skeleton} = props

 return (
        <div className={'comment'}>
            <div className={'comment__top-content'}>
                <Stars className={'comment__top-content-stars'} count={rating ?? 0} gray={true} bg={true}/>
                <span className={'comment__top-content-date'}>{undefined !== created_at?moment(created_at).format('YYYY-MM-DD'): <Skeleton className={'skeleton'} height={15} width={40} baseColor={'#663ef5'} inline={true}/>}</span>
                <span className={'comment__top-content-date'}>{undefined !== created_at?moment(created_at+ "03:00", 'YYYY-MM-DD HH:mm:ssZ').locale('uk').fromNow() : <Skeleton className={'skeleton'} height={15} width={40} baseColor={'#663ef5'} inline={true}/>}</span>
                <span className={'comment__top-content-city'}>{city ?? <Skeleton className={'skeleton'} height={15} width={40} baseColor={'#663ef5'} inline={true}/>}</span>
                <div className={'comment__top-content-nav'}>
                    <img className={'comment__top-content-nav-image'} src={report ?? <Skeleton className={'skeleton'} height={15} width={40} baseColor={'#663ef5'} inline={true}/>}/>
                </div>
            </div>
            <span className={'comment__bottom-text'}>{review ?? <>
                <Skeleton className={'skeleton'} height={15} baseColor={'#663ef5'} inline={true}/>
                <Skeleton className={'skeleton'} height={15} baseColor={'#663ef5'} inline={true}/>
            </>}</span>
        </div>
    )
}

export default Comment;
