import React from 'react';
import Stars from "../tab-rating-and-view/rating/stars/Stars";
import Skeleton from "react-loading-skeleton";

function PhoneTitle(props) {
    const {currentPhone, avg, commentCount} = props

    return (
        <div className={'title'}>
            <span className={'title-numbers'}>
            {currentPhone ? <><span className={'title-numbers-country'}>+380</span> {currentPhone?.phone}</> :
                <Skeleton className={'skeleton'} height={40} width={250} baseColor={'#663ef5'} inline={true}/>
            }
            </span>
            <div className="title-tags">
                <span className="title-tags-item">
                    {currentPhone ? 'Україна' :
                        <Skeleton className={'skeleton'} height={16} width={60} baseColor={'#663ef5'} inline={true}/>}
                </span>
                <div className="title-tags-item">
                    {currentPhone ?
                        <><Stars className={'title-tags-item-stars'} count={Math.round(avg ?? 0)} gray={true} bg_invisible={true}/>
                            <span className={'title-tags-item-count'}>{commentCount}x</span></> :
                        <Skeleton className={'skeleton'} height={16} width={60} baseColor={'#663ef5'} inline={true}/>}
                </div>
                <span className="title-tags-item">
                    {currentPhone ?
                        'мобільний оператор' :
                        <Skeleton className={'skeleton'} height={16} width={60} baseColor={'#663ef5'} inline={true}/>}
                </span>
                <span className="title-tags-item">
                    {currentPhone ?
                        currentPhone?.description :
                        <Skeleton className={'skeleton'} height={16} width={60} baseColor={'#663ef5'} inline={true}/>}
                </span>
            </div>
        </div>
    )
}

export default PhoneTitle;
