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

function Home(props) {
    const {number} = useParams()
    console.log(number)
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
        }
    );
    const numberService = usePhoneService(number, data, setData)
    let navigate = useNavigate();


    useEffect(() => {
        if (!data.loaded) {
            updateData()
        }
    }, []);

    useEffect(() => {
            setData({
                ...data,
            })
        updateData()
        window.scrollTo(0, 0);
    }, [number]);


    const updateData = () => {
        numberService.getNumberRating(navigate).then((value) => {
            console.log(value)
            setData({
                ...data,
                loaded: true,
                ...value,
            })
        })
    }

    const reloadComponent = () => {
        setData({...data, reload: true})
    }

    return (
        <div className="container">

            <div>
                {/*{props.children}*/}
            </div>

            {/*{data.loaded ? <Rating rating={data.rating}/> : null}*/}

            {/*{<AddRating reloadComponent={reloadComponent} idPhone={data.idPhone}/>}*/}

            {/*{<Comments data={data}/>}*/}

            {/*<LastVisitedPhones/>*/}

            {/*<RecommendedArticles/>*/}

            {/*<Accordion/>*/}
            {console.log('asdfasdasdasdasdf',data)}
            {/*{data.loaded ? <Chart chart={data.chart}/> : null}*/}

            {data.loaded ? <Tab rating={data.rating} view={data.view}/> : null}

        </div>
    )
}

export default Home;
