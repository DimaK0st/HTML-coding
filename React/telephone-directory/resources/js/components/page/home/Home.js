import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import usePhoneService from "../../../services/NumberService";
import AddRating from "../../addRating/AddRating";
import Comments from "../../comments/Comments";
import LastVisitedPhones from "../../lastVisitedPhones/LastVisitedPhones";
import RecommendedArticles from "../../recommendedArticles/RecommendedArticles";
import Accordion from "../../accordion/Accordion";
import Tab from "../../tab-rating-and-view/Tab";
import PhoneTitle from "../../phoneTitle/PhoneTitle";
import 'react-loading-skeleton/dist/skeleton.css'

function Home(props) {
    const defaultState =         {
        sortedList: [],
        loading: false,
        reload: false,
    }
    const [data, setData] = useState(
        defaultState
    );
    const {number} = useParams()
    const [comments, setComments] = useState(true);
    const numberService = usePhoneService(number, data, setData)
    let navigate = useNavigate();

    useEffect(() => {
        setData(defaultState)
        updateData()
        reloadComponent()
    }, [number]);

    useEffect(() => {
        setData(defaultState)
        updateData()
    }, [comments]);

    const updateData = () => {
        numberService.getNumberRating(navigate).then((value) => {
            setData({
                ...data,
                loaded: true,
                ...value,
            })
        })
        window.scrollTo(0, 0);
    }

    const reloadComponent = () => {
        if (!comments) {
            setComments(true)
        }
    }

    return (
        <div className="home">
            <PhoneTitle currentPhone={data?.currentPhone} avg={data?.rating?.average}
                        commentCount={data?.rating?.count}/>
            <Tab loaded={data.loaded} rating={data.rating} view={data.view}/>
            <AddRating reloadComponent={reloadComponent} idPhone={data.currentPhone?.id}
                       review={data?.userReview?.review}/>
            <Comments reload={{comments: comments, setComments: setComments}}/>
            <LastVisitedPhones/>
            <RecommendedArticles/>
            <Accordion/>
        </div>
    )
}

export default Home;
