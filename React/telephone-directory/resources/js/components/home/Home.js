import React, {useEffect} from 'react';
import Stars from "../rating/stars/Stars";
import RatingLine from "../rating/ratingLine/RatingLine";
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../services/NumberService";

function Home(props) {
    const {number} = useParams()
    const numberService = usePhoneService()

    useEffect(() => {

        numberService.getNumberRating(number);

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
            <Stars count={5}/>
            <Stars count={4}/>
            <Stars count={3}/>
            <Stars count={2}/>
            <Stars count={1}/>

            <div style={{width: '400px'}}>
                <RatingLine count={5} current={14} total={36}/>
                <RatingLine count={4} current={0} total={36}/>
                <RatingLine count={3} current={7} total={36}/>
                <RatingLine count={2} current={0} total={36}/>
                <RatingLine count={1} current={15} total={36}/>
            </div>
        </div>
    )
}

export default Home;
