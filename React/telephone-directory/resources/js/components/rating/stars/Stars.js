import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './stars.scss'
import {useState} from "react";

const Stars = (props) => {
    const count = props.count?? 1;
    const [classStar, setClassStar] = useState([
        'one',
        'two',
        'three',
        'four',
        'five',
    ]);

    let starsContent = '';

    for (let i=0; i<count;i++){
        starsContent+='★';
    }

    return (
        <div className={'stars'}>
            <span className={`stars__item ${classStar[count-1]}`}>{starsContent}</span>
        </div>
    )
}

export default Stars
