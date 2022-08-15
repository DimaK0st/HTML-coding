import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './stars.scss'
import {useState} from "react";
import NUMBER_CLASS_NAME from "../../../_CONST";

const Stars = (props) => {
    const {count, className} = props;

    let starsContent = '';

    for (let i=0; i<count;i++){
        starsContent+='★';
    }

    return (
        <div className={'stars'}>
            <span className={`stars__item ${className} ${NUMBER_CLASS_NAME[count-1]}`}>{starsContent}</span>
        </div>
    )
}

export default Stars
