import React, {useEffect, useState} from 'react';
import './lastVisitedPhones.scss'
import LastPhone from "./lastPhone/LastPhone";
import usePhoneService from "../../services/NumberService";
import {useParams} from "react-router-dom";

function LastVisitedPhones(props) {
    const {number} = useParams()
    const [data, setData] = useState([])

    const numberService = usePhoneService(number, data, setData)

    useEffect(() => {
        numberService.getLastVisitedNumbers().then(()=>{
        });
    }, [])



    let content = data.sortBy?.map((item) => {
            const temp = data.data[item]
            console.log('testerest-----------', temp)
            return <LastPhone avg={parseFloat(temp.rating_avg_rating).toFixed(1)} phone={temp.phone}
                              description={temp.rating.review}/>

        })


    useEffect(() => {

        console.log('data', data)
    }, [data])

    return (
        <div className={'last-numbers'}>

            <span className={'last-numbers-title'}>Останні відвідані номери</span>

            <div className={'last-numbers-items'}>
                <div className={'last-numbers-items-wrapper'}>
                    {content}
                </div>
            </div>

        </div>
    )
}

export default LastVisitedPhones;
