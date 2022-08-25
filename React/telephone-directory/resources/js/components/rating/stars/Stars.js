import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './stars.scss'
import {useState} from "react";
import NUMBER_CLASS_NAME from "../../../_CONST";

const Stars = (props) => {
    const {count, className, gray, bg} = props;

    let starsContent = [];
    let bgClassName;

    for (let i = 0; i < count; i++) {
        starsContent.push(<span
            className={`stars__item ${className}
            ${bg ? 'stars-white' : null}
            ${NUMBER_CLASS_NAME[count - 1]}`}
        >★</span>);
    }

    if (gray) {
        for (let i = 0; i < 5 - count; i++) {
            starsContent.push(<span className={`stars__item ${className} gray`}>★</span>);
        }
    }

    if (bg) {
        bgClassName = 'stars-bg bg-' + NUMBER_CLASS_NAME[count - 1]
    }

    return (
        <div className={`stars ${className} ${bgClassName}`}>
            {starsContent}
        </div>
    )
}

export default Stars
