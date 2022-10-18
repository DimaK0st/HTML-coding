import React from 'react';
import './animComment.scss'
import Stars from "../../tab-rating-and-view/rating/stars/Stars";
import Skeleton from "react-loading-skeleton";
import {useNavigate} from "react-router-dom";

function AnimComment(props) {
    let navigate = useNavigate();

    const redirect = (phone)=>{
        if (props?.phone !== undefined) {
            navigate('/phone/' + phone)
        }
    }

    return (
        <div className={'anim-comment'} style={{direction: 'ltr', textAlign: 'left'}} onClick={()=>redirect(380+props?.phone)}>
            <div className={'anim-comment-up'}>
                <Stars className={'anim-comment-up-stars'} bg={true} count={Math.round(props.avg ?? 0)} gray={true}/>
                <div className={'anim-comment-up-phone'}>
                   {props?.phone? '+'+380+props?.phone
                       : <Skeleton className={'skeleton'} height={17} width={100} baseColor={'#663ef5'} inline={true}/>}
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
