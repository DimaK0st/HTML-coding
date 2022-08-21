import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './stars.scss'
import {useState} from "react";
import NUMBER_CLASS_NAME from "../../../_CONST";

const Stars = (props) => {
    const {count, className, gray} = props;

    let starsContent = [];

    for (let i=0; i<count;i++){
        starsContent.push(<span className={`stars__item ${className} ${NUMBER_CLASS_NAME[count-1]}`}>★</span>);
    }

    if (gray === true){
        for (let i=0; i<5-count;i++){
            starsContent.push(<span className={`stars__item ${className} gray`}>★</span>);
        }
    }

    return (
        <div className={`stars ${className}`}>
            {starsContent}
        </div>
    )
}

export default Stars
