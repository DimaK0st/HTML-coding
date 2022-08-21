import React, {useEffect, useLayoutEffect, useState} from 'react';
import Stars from "../../rating/stars/Stars";
import RatingLine from "../../rating/ratingLine/RatingLine";
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../rating/Rating";
import useTraceUpdate from "use-trace-update";

function Home(props) {
    const {number} = useParams()
    const [data, setData] = useState([]);
    const numberService = usePhoneService()
    let navigate = useNavigate();

    useTraceUpdate(props)

    useEffect(() => {
        console.log(data.length)
        console.log([].length)
        if(data.length === 0){
            numberService.getNumberRating(number,setData, navigate)
            console.error('render')
        }
    }, []);

    return (
        <div className="container">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="resources/js/components/home/Home#">AppDividend</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="resources/js/components/home/Home#">Home</a></li>
                        <li><a href="resources/js/components/home/Home#">Page 1</a></li>
                        <li><a href="resources/js/components/home/Home#">Page 2</a></li>
                        <li><a href="resources/js/components/home/Home#">Page 3</a></li>
                    </ul>
                </div>
            </nav>
            <div>
                {/*{props.children}*/}
            </div>

            {data.length!=0?<Rating data={data}/>:null}

        </div>
    )
}

export default Home;
