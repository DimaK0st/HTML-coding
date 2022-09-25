import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../tab-rating-and-view/rating/Rating";
import AddRating from "../../addRating/AddRating";
import Comments from "../../comments/Comments";
import LastVisitedPhones from "../../lastVisitedPhones/LastVisitedPhones";
import RecommendedArticles from "../../recommendedArticles/RecommendedArticles";
import Accordion from "../../accordion/Accordion";
import Chart from "../../tab-rating-and-view/сhart/Chart";
import Tab from "../../tab-rating-and-view/Tab";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import PhoneTitle from "../../phoneTitle/PhoneTitle";


function Home(props) {
    const {number} = useParams()
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
        }
    );
    const [comments, setComments] = useState(true);
    const numberService = usePhoneService(number, data, setData)
    let navigate = useNavigate();


    // useEffect(() => {
    //     if (!data.loaded) {
    //         updateData()
    //     }
    // }, []);

    console.log('update data', number)

    useEffect(() => {
        setData((data)=> {
            return {
                reload: false,
            }
        })
        updateData()
        window.scrollTo(0, 0);
    }, [number]);


    const updateData = () => {
        numberService.getNumberRating(navigate).then((value) => {
            setData({
                ...data,
                loaded: true,
                ...value,
            })
        })
    }

    const reloadComponent = () => {
        setComments(true)
    }

    return (
        <div className="container">

            <div>
                {/*{props.children}*/}
            </div>

            {/*<PhoneTitle currentPhone={data?.currentPhone} avg={data?.rating?.average} commentCount={data?.rating?.count}/>*/}

            {/*<Tab loaded={data.loaded} rating={data.rating} view={data.view}/>*/}

            <AddRating  reloadComponent={reloadComponent} idPhone={data.currentPhone?.id} review = {data?.userReview?.review}/>

            <Comments reload={{comments: comments, setComments:setComments}}/>

            {/*<LastVisitedPhones/>*/}

            {/*<RecommendedArticles/>*/}

            <Accordion/>

        </div>
    )
}

export default Home;
