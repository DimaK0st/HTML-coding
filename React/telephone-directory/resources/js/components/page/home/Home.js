import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../rating/Rating";
import AddRating from "../../addRating/AddRating";
import Comments from "../../comments/Comments";
import LastVisitedPhones from "../../lastVisitedPhones/LastVisitedPhones";
import RecommendedArticles from "../../recommendedArticles/RecommendedArticles";
import Accordion from "../../accordion/Accordion";

function Home(props) {
    const {number} = useParams()
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
            reload: false,
        }
    );
    const numberService = usePhoneService(number, data,setData)
    let navigate = useNavigate();


    useEffect(() => {
        if (!data.loaded ) {
            updateData()
        }
    }, []);

    useEffect(() => {
        if (data.reload===true) {
            updateData()
        }
    }, [data.reload]);

    const updateData=()=>{
        numberService.getNumberRating(navigate).then((value) => {
            console.log(value)
            setData({
                ...data,
                loaded: true,
                reload: false,
                ...value,
            })
        })
    }

    const reloadComponent = ()=>{
        setData({...data, reload: true})
    }

    return (
        <div className="container">

            <div>
                {/*{props.children}*/}
            </div>

            {data.loaded ? <Rating rating={data.rating}/> : null}

            {<AddRating reloadComponent={reloadComponent} idPhone={data.idPhone}/>}

            {<Comments reload={data.reload}/>}

            <LastVisitedPhones/>

            <RecommendedArticles/>

            <Accordion/>

        </div>
    )
}

export default Home;
