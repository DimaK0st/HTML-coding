import React, {useEffect, useLayoutEffect, useState} from 'react';
import './comments.scss'
import Filter from "./filter/Filter";
import Comment from "./comment/Comment";

function Comments(props) {

    return (
        <div className={'comments'}>
            <span className={'comments-title'}>Коментарі ()</span>
            <Filter setData={props.setData} data={props.data}/>

            <div className={'comments'}>
                <Comment id={3} review={'asdf asdfasd afs dsaf dfs'} rating={3} city={'Dnepr'} created_at={'2022-08-20T12:05:17.000000Z'}/>

            </div>
        </div>
    )


}

export default Comments;
