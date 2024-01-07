import React, {useEffect} from 'react';
import RatingLine from "./ratingLine/RatingLine";
import Stars from "./stars/Stars";
import NUMBER_CLASS_NAME from "../../../_CONST";
import Skeleton from "react-loading-skeleton";

function Rating(props) {
    const {rating} = props
    let starsContent = [], ratingLineContent = [];

    const getCurrentRating = (rate) => {
        let totalRate = rating?.group.filter((item) => {
            return item.rating === rate
        })

        if (totalRate?.length) {
            return totalRate[0]['rating_count']
        } else {
            return '0'
        }
    }

    let generateRating = ()=>{
        starsContent = []
        ratingLineContent = []

        for (let i = 5; i > 0; i--) {
            starsContent.push(<Stars key={i} count={i}/>)
            console.log('rating', rating)
            ratingLineContent.push(<RatingLine key={i} count={i} current={getCurrentRating(i)} total={rating?.count ??
                <Skeleton height={30} width={300} baseColor={'#663ef5'}/>}/>)
        }
    }

    generateRating()

    useEffect(() => {
        generateRating()
    }, [rating])

    console.log(starsContent, ratingLineContent)
    return (
        <div className="rating">
            <div className={'rating__number'}>
                <span
                    className={`rating__number-title ${NUMBER_CLASS_NAME[4]}`}>{rating?.average !== undefined ? parseFloat(rating?.average ?? 0).toFixed(1) :
                    <Skeleton height={70} width={60} style={{marginBottom: "10px"}} baseColor={'#663ef5'}/>}</span>
                <Stars className={'rating__number-stars'} count={Math.round(parseFloat(rating?.average ?? 0))}
                       gray={true}/>
                <span className={'rating__number-comment'}>Кількість оцінок: </span><span
                className={'rating__number-comment'}>{
                rating?.count ?? <Skeleton className={'skeleton'} height={15} width={40} baseColor={'#663ef5'}/>
            }</span>
            </div>
            <div className={'rating__line'}>
                <div className={'rating__line-stars'}>
                    {starsContent ?? <Skeleton height={30} width={300} baseColor={'#663ef5'}/>}
                </div>
                <div className={'rating__line-line'}>
                    {ratingLineContent ?? <Skeleton height={30} width={300} baseColor={'#663ef5'}/>}
                </div>
            </div>
        </div>
    )
}

export default Rating;
