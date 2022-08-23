import React, {useEffect, useLayoutEffect, useState} from 'react';
import './addRating.scss'
import NUMBER_CLASS_NAME from "../../_CONST";
import {useParams} from "react-router-dom";

function AddRating(props) {
    const {number} = useParams()
    const [post, setPost] = useState({
        rating: 3
    })

    return (
        <div className={'rating-form'}>

            <span className={'rating-form__title'}>Який досвід Ви маєте з цим номером?</span>

            <form className={"rating-area bg-" + NUMBER_CLASS_NAME[post.rating - 1]}
                  onChange={(e, post) => setPost({...post, rating: e.target.value})}>
                <input type="radio" id="star-5" name="rating" value="5"/>
                <label htmlFor="star-5" title="Оценка «5»"></label>
                <input type="radio" id="star-4" name="rating" value="4"/>
                <label htmlFor="star-4" title="Оценка «4»"></label>
                <input type="radio" id="star-3" name="rating" checked={post.rating === 3} value="3"/>
                <label htmlFor="star-3" title="Оценка «3»"></label>
                <input type="radio" id="star-2" name="rating" value="2"/>
                <label htmlFor="star-2" title="Оценка «2»"></label>
                <input type="radio" id="star-1" name="rating" value="1"/>
                <label htmlFor="star-1" title="Оценка «1»"></label>
            </form>

            <textarea className={'rating-form'}></textarea>
            <label htmlFor="check1"><input id="check1" type="checkbox"/> <span>Я погоджуюся з </span> <a href={'https://www.callinsider.com.ua/p/umovy-dodavannya-komentariv'}>Умовами додавання коментарів</a></label>
            <button>Выдправити</button>
            <span>Допоможіть іншим відвідувачам форуму тим, що поділитеся своїм досвідом з цим номером телефону. Цей номер безпечний чи докучливий? Ви очікували дзвінка з цього номера ({number}), чи це був небажаний дзвінок?</span>
        </div>
    )


}

export default AddRating;
