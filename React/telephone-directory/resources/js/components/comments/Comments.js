import React, {useEffect, useLayoutEffect, useState} from 'react';
import './comments.scss'
import Filter from "./filter/Filter";
import Comment from "./comment/Comment";
import rating from "../rating/Rating";
import {useParams} from "react-router-dom";
import usePhoneService from "../../services/NumberService";

function Comments(props) {
    const {sortedList, countReview, data, numberService, paginateUrl}=props
    return (
        <div className={'comments'}>

            {console.error("Comments")}

            <span className={'comments-title'}>Коментарі </span><span className={'comments-count'}>({countReview})</span>
            <Filter setData={props.setData} data={data}/>

            <div className={'comments'}>
                {sortedList.map((item)=>{
                    return <Comment id={item.id} review={item.review} rating={item.rating} city={item.city} created_at={item.created_at}/>
                })}

            </div>
            <div>
                <button onClick={()=>numberService.getNumberRatingPaginate(paginateUrl)}>ІНШІ КОМЕНТАРІ</button>
            </div>
        </div>
    )


}

export default Comments;
