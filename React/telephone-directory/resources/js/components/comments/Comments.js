import React, {useEffect, useLayoutEffect, useState} from 'react';
import './comments.scss'
import Filter from "./filter/Filter";
import Comment from "./comment/Comment";

function Comments(props) {
    const {sortedList, countReview, data, numberService}=props
    return (
        <div className={'comments'}>
            <span className={'comments-title'}>Коментарі </span><span className={'comments-count'}>({countReview})</span>
            <Filter setData={props.setData} data={data}/>

            <div className={'comments'}>
                {sortedList.map((item)=>{
                    return <Comment id={item.id} review={item.review} rating={item.rating} city={item.city} created_at={item.created_at}/>
                })}

            </div>
            <div>
                <button onClick={()=>numberService.getNumberRatingPaginate()}></button>
            </div>
        </div>
    )


}

export default Comments;
