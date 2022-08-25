import React, {useEffect, useLayoutEffect, useState} from 'react';
import './comment.scss'
import NUMBER_CLASS_NAME from "../../../_CONST";
import {useParams} from "react-router-dom";
import Stars from "../../rating/stars/Stars";

function Comment(props) {
    const {id, review, rating, city, created_at} = props

    const {number} = useParams()
    const [post, setPost] = useState({
        rating: 6
    })

    return (
        <div className={'comment'}>
            <div className={'comment__top-content'}>
                <Stars className={'comment__top-content-stars'} count={rating} gray={true} bg={true}/>
                <span className={'comment__top-content-date'}>{created_at}</span>
                <span className={'comment__top-content-city'}>{city}</span>
            </div>
            <span className={'comment__bottom-text'}>{review}</span>
        </div>
    )


}

export default Comment;
