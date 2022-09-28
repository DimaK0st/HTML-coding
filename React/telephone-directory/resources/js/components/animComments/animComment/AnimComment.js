import React, {useEffect, useState} from 'react';
import './animComment.scss'
import Carousel from "react-multi-carousel";
import {useParams} from "react-router-dom";
import Stars from "../../tab-rating-and-view/rating/stars/Stars";
import Skeleton from "react-loading-skeleton";

function AnimComment(props) {

    return (
        <div className={'anim-comment'} style={{direction: 'ltr'}}>

            <div className={'anim-comment-up'}>
                <Stars className={'anim-comment-up-stars'} bg={true} count={Math.round(props.avg ?? 0)} gray={true}/>
                <div className={'anim-comment-up-phone'}>
                   {props?.phone ?? <Skeleton className={'skeleton'} height={17} width={100} baseColor={'#663ef5'} inline={true}/>}
                </div>
            </div>

            <div className={'anim-comment-description'}>
                {props?.description ?? <>
                    <Skeleton className={'skeleton'} height={17} baseColor={'#663ef5'} inline={true}/>
                    <Skeleton className={'skeleton'} height={17} baseColor={'#663ef5'} inline={true}/>
                    <Skeleton className={'skeleton'} height={17} baseColor={'#663ef5'} inline={true}/>
                </>}
            </div>

        </div>
    )
}


export default AnimComment;
