import React, {useEffect, useState} from 'react';
import './main.scss'
import 'react-multi-carousel/lib/styles.css';
import {useNavigate, useParams} from "react-router-dom";
import usePhoneService from "../../../services/NumberService";
import AnimComments from "../../animComments/AnimComments";
import AnimComment from "../../animComments/animComment/AnimComment";
import SearchInput from "../../searchInput/SearchInput";

function Main(props) {
    let navigate = useNavigate();
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
        }
    );

    const numberService = usePhoneService(null, data, setData)

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
                </div>
                <span className={''}>Порада: почніть з пошуку номера, наприклад: <span onClick={()=>redirect('380971281678')}>+380 97 417 2874</span></span>
            </div>


            <AnimComments rtl={true}/>
            <AnimComments rtl={false}/>

            {/*<AnimComment avg={4} description={'hueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as df'} phone={380971281678}/>*/}
            {/*<AnimComment/>*/}

        </div>
    )
}

export default Main;
