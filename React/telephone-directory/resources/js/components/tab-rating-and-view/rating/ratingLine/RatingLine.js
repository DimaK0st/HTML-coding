import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './ratingLine.scss'
import {useState} from "react";
import NUMBER_CLASS_NAME from "../../../../_CONST";

const RatingLine = (props) => {
    const {count, current, total, width} = props;

    const content = current !== 0 ?
        <>
            <div className={`rating-line__item bg-${NUMBER_CLASS_NAME[count - 1]}`}
                 style={{width: `${current / total * 100}%`}}></div>
        </> : null

    return (
        <div className={'rating-line'}>
            <div className={'rating-line__bg'} style={{width: width ? `${width}px` : '100%'}}>
                {content}
            </div>
            <span className={'rating-line__text'}> {current}×</span>
        </div>

    )
}

export default RatingLine
