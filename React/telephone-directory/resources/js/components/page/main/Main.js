import React, {useEffect, useState} from 'react';
import './main.scss'
import 'react-multi-carousel/lib/styles.css';
import {useParams} from "react-router-dom";
import usePhoneService from "../../../services/NumberService";
import AnimComments from "../../animComments/AnimComments";
import AnimComment from "../../animComments/animComment/AnimComment";

function Main(props) {
    const [data, setData] = useState(
        {
            sortedList: [],
            loading: false,
        }
    );

    const numberService = usePhoneService(null, data, setData)



    return (
        <div className={'main'}>

            <AnimComments rtl={true}/>
            <AnimComments rtl={false}/>

            {/*<AnimComment avg={4} description={'hueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as dfhueta asdfasdf asdfasdf asdfa sdf asd fas df a sdf as df'} phone={380971281678}/>*/}
            {/*<AnimComment/>*/}

        </div>
    )
}

export default Main;
