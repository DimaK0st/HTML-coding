import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../rating/Rating";
import AddRating from "../../addRating/AddRating";
import Comments from "../../comments/Comments";

function Home(props) {
    const {number} = useParams()
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
        }
    );
    const numberService = usePhoneService(number)
    let navigate = useNavigate();


    useEffect(() => {
        console.log(data.length)
        if (!data.loaded) {
            numberService.getNumberRating(navigate).then((value) => {

                console.log(value)

                setData({
                    ...data,
                    loaded: true, ...value,
                    'countReview': value.allReview.length,
                    'averageRating': parseFloat(value.averageRating),
                })
            })
        }
    }, []);


    return (
        <div className="container">

            <div>
                {/*{props.children}*/}
            </div>

            {data.loaded ? <Rating data={data}/> : null}

            <AddRating/>

            {data.loaded ? <Comments sortedList={data?.sortedList}
                                     countReview={data?.reviewInfo?.total}
                                     numberService={numberService}
                                     data={data}
                                     setData={setData}
                                     paginateUrl={data?.reviewInfo?.total}/> : null}

        </div>
    )
}

export default Home;
