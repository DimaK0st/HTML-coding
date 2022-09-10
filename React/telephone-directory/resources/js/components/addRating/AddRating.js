import React, {useEffect, useLayoutEffect, useState} from 'react';
import './addRating.scss'
import NUMBER_CLASS_NAME from "../../_CONST";
import {useParams} from "react-router-dom";
import usePhoneService from "../../services/NumberService";
import {data} from "autoprefixer";

function AddRating(props) {
    const {number} = useParams()
    const [post, setPost] = useState({
        rating: 6,
        review: '',
        id: props.idPhone
    })

    const numberService = usePhoneService(number, post, setPost)

    const handleSubmit = (event) => {
        event.preventDefault();
        numberService.addRating(props.reloadComponent)
        setPost({...post, rating: 6})
    };

    let inputsContent = [];

    for (let i = 5; i > 0; i--) {
        inputsContent.push(<>
            <input type="radio" id={"star-" + i} name="rating" defaultChecked={data.rating === i} value={i}/>
            <label htmlFor={"star-" + i} title={"Оценка «" + i + "»"}></label></>)
    }

    return (
        <form className={'rating-form'} onSubmit={handleSubmit}>

            <span className={'rating-form__title'}>Який досвід Ви маєте з цим номером?</span>

            <form className={"rating-form__area bg-" + NUMBER_CLASS_NAME[post.rating - 1]}
                  onChange={(e) => setPost({...post, rating: e.target.value})}>
                {inputsContent}
            </form>
            <div className={`rating-form__post-wrapper ${post.rating === 6 ? 'rating-form__hidden' : ''}`}>
                <textarea onChange={(e) => {
                    setPost({...post, review: e.target.value})
                }} required className={'rating-form__review'}
                          placeholder={'Тут напишіть свою оцінку цього номера телефону'}>{post.review}</textarea>
                <label htmlFor="check1" className={'rating-form__check'}>
                    <input required className={'rating-form__check-input'} id="check1" type="checkbox"/>
                    <span className={'rating-form__check-text'}>Я погоджуюся з </span> <a
                    className={'rating-form__check-url'}
                    href={'https://www.callinsider.com.ua/p/umovy-dodavannya-komentariv'}>Умовами додавання
                    коментарів</a>
                </label>
                <button type='submit' className={'rating-form__button'}>Відправити</button>
            </div>
            <span className={'rating-form__bottom-text'}>Допоможіть іншим відвідувачам форуму тим, що поділитеся своїм досвідом з цим номером телефону. Цей номер безпечний чи докучливий? Ви очікували дзвінка з цього номера (<span
                className={'rating-form__bottom-text-phone'}>{number}</span>), чи це був небажаний дзвінок?</span>
        </form>
    )


}

export default AddRating;
