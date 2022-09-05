import React, {useEffect, useState} from 'react';
import './comments.scss'
import Filter from "./filter/Filter";
import Comment from "./comment/Comment";
import {useParams} from "react-router-dom";
import usePhoneService from "../../services/NumberService";
import {isNull} from "lodash";

function Comments(props) {

    const {number} = useParams()
    const [data, setData] = useState({
        loaded: false,
        sort: 'all',
        order: 1,
    });
    const numberService = usePhoneService(number, data, setData)

    useEffect(() => {
        numberService.getComments(data.sort, data.order)
    }, [data.order, data.sort]);


    return (
        <div className={'comments'}>


            <span className={'comments-title'}>Коментарі </span><span className={'comments-count'}>({data.total})</span>

            <Filter setData={setData} data={data} numberService={numberService}/>

            <div className={'comments'}>
                {data?.comments?.map((item) => {
                    return <Comment id={item.id} review={item.review} rating={item.rating} city={item.city}
                                    created_at={item.created_at}/>
                })}

            </div>
            <div className={'comments-paginate'}>
                <button className={`comments-paginate-btn ${isNull(data.nextPage)?'hidden':''}`}
                        onClick={() => numberService.getCommentsByPaginate(data.sort, data.nextPage)}
                >ІНШІ КОМЕНТАРІ
                </button>
            </div>
        </div>
    )


}

export default Comments;
