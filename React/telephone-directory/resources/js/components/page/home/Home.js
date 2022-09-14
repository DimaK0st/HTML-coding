import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../rating/Rating";
import AddRating from "../../addRating/AddRating";
import Comments from "../../comments/Comments";
import LastVisitedPhones from "../../lastVisitedPhones/LastVisitedPhones";
import RecommendedArticles from "../../recommendedArticles/RecommendedArticles";
import Accordion from "../../accordion/Accordion";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {faker} from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


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


            <Line options={options} data={{
                labels,
                datasets: [
                    {
                        fill: true,
                        label: 'Dataset 2',
                        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            }} />;

        </div>
    )
}

export default Home;
