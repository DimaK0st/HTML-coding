import React, {useEffect, useLayoutEffect, useState} from 'react';
import Stars from "../../rating/stars/Stars";
import RatingLine from "../../rating/ratingLine/RatingLine";
import {useParams, useNavigate} from "react-router-dom";

import usePhoneService from "../../../services/NumberService";
import Rating from "../../rating/Rating";
import useTraceUpdate from "use-trace-update";
import AddRating from "../../addRating/AddRating";
import Comment from "../../comments/comment/Comment";

function Home(props) {
    const {number} = useParams()
    const [data, setData] = useState([]);
    const numberService = usePhoneService()
    let navigate = useNavigate();


    useEffect(() => {
        console.log(data.length)
            if(data.length === 0){
                numberService.getNumberRating(number,setData, navigate).then((data)=>{
                    setData(data)
                })
                console.error('render1')
            }
        console.error('render2')
    }, []);

    // useEffect(()=>{
    //     data.allRating.map((item)=>console.log())
    // },[data])

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
            <AddRating/>

            <Comment id={3} review={'asdf asdfasd afs dsaf dfs'} rating={3} city={'Dnepr'} created_at={'2022-08-20T12:05:17.000000Z'}/>
        </div>
    )
}

export default Home;
