import React, {useEffect, useState} from 'react';
import './comments.scss'
import Filter from "./filter/Filter";
import Comment from "./comment/Comment";
import {useParams} from "react-router-dom";
import usePhoneService from "../../services/NumberService";
import {isNull} from "lodash";
import Skeleton from "react-loading-skeleton";

function Comments(props) {
const dataDefaultState = {
    loaded: false,
    sort: 'all',
    order: 1,
    comments: [
        [], [], [], [], [], [], [], [], [], []
    ]
}

    const {number} = useParams()
    const [data, setData] = useState(dataDefaultState);
    const [paginateState, setPaginateState] = useState(false);
    const numberService = usePhoneService(number, data, setData)

    useEffect(() => {
        updateState()
    }, [data.order, data.sort]);

    useEffect(() => {
        if (props.reload.comments){
            updateState()
        }
    }, [props.reload.comments]);

    const updateState = ()=>{
        numberService.getComments(data.sort, data.order).then(()=>{
            props.reload.setComments(false)
        })
    }

    const paginateComments = ()=>{
        setPaginateState(true)
        numberService.getCommentsByPaginate(data.sort, data.order, data.nextPage).then(()=>{
            setPaginateState(false)
        })
    }

    return (
        <div className={'comments'}>
            <span className={'comments-title'}>Коментарі </span><span className={'comments-count'}>({data.total})</span>
            <Filter setData={setData} data={data} numberService={numberService}/>
            <div className={'comments'}>
                {data?.comments?.map((item) => {
                    return <Comment id={item?.id} review={item?.review} rating={item?.rating} city={item?.city}
                                    created_at={item?.created_at}/>
                })}
            </div>
            <div className={'comments-paginate'}>
                <button className={`comments-paginate-btn ${isNull(data.nextPage) ? 'hidden' : ''}`}
                        onClick={() => paginateComments()}>
                    {props.reload.comments || paginateState?
                        <Skeleton className={'skeleton'} height={17} width={100} baseColor={'#663ef5'} inline={true}/>:
                    'ІНШІ КОМЕНТАРІ'}
                </button>
            </div>
        </div>
    )
}

export default Comments;
