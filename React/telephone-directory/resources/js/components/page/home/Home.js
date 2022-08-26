import React, {useEffect, useLayoutEffect, useState} from 'react';
import Stars from "../../rating/stars/Stars";
import RatingLine from "../../rating/ratingLine/RatingLine";
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../rating/Rating";
import useTraceUpdate from "use-trace-update";
import AddRating from "../../addRating/AddRating";
import Comment from "../../comments/comment/Comment";
import Comments from "../../comments/Comments";

function Home(props) {
    const {number} = useParams()
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
        }
    );
    const numberService = usePhoneService()
    let navigate = useNavigate();


    useEffect(() => {
        console.log(data.length)
        if (!data.loaded) {
            numberService.getNumberRating(number, setData, navigate).then((value) => {
                console.log('asdfasdfasd')
                console.log(value)
                setData({...data, loaded: true, ...value})
            })
            console.error('render1')
        }
        console.error('render2')
    }, []);

    // useEffect(()=>{
    //     data.allRating.map((item)=>console.log())
    // },[data])

    if (data.loaded) {
        console.log(data.userRating.updated_at)

        var now = new Date(data.userRating.updated_at);

// например, выведем текущую дату в консоль

    }

    return (
        <div className="container">

            <div>
                {/*{props.children}*/}
            </div>

            {data.loaded ? <Rating data={data}/> : null}

            <AddRating/>

            {data.loaded ? <Comments data={data} setData={setData}/> : null}

        </div>
    )
}

export default Home;
