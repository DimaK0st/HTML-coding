import React, {useEffect, useState} from 'react';
import 'react-multi-carousel/lib/styles.css';
import {useNavigate} from "react-router-dom";
import usePhoneService from "../../../services/NumberService";
import AnimComments from "../../animComments/AnimComments";
import SearchInput from "../../searchInput/SearchInput";

function Main(props) {
    let navigate = useNavigate();
    const [data, setData] = useState(
        {
            comments: [],
        }
    );

    const numberService = usePhoneService(null, data, setData)

    useEffect(()=>{
        numberService.getCarouselCommentsForMainPage()
    }, [])

    const redirect = (phone)=>{
        navigate('/phone/'+phone)
    }

    return (
        <div className={'main'}>
            <div className={'main-search'}>
                <span className={'main-search-top'}>
                    Ідентифікація та <span className={'main-search-top-bold'}>оцінка</span>
                </span>
                <span className={'main-search-bottom'}>
                    невідомих телефонних номерів
                </span>
                <div className={'main-search-input'}>
                    <SearchInput/>
                    <span className={'main-search-input-bottom'}>
                        Порада: почніть з пошуку номера, наприклад:
                        <span className={'main-search-input-bottom-hover'} onClick={()=>redirect('380971281678')}>+380 97 417 2874</span>
                    </span>
                </div>
            </div>
            <div className={'main-comments'}>
                <AnimComments commentList={data.comments?.positive} rtl={true}/>
                <AnimComments commentList={data.comments?.negative} rtl={false}/>
            </div>
        </div>
    )
}

export default Main;
