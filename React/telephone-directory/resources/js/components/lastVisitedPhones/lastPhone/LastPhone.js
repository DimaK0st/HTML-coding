import React, {useEffect, useState} from 'react';
import './lastPhone.scss'
import NUMBER_CLASS_NAME from "../../../_CONST";
import {isNull} from "lodash";
import {Link} from "react-router-dom";
import Skeleton from "react-loading-skeleton";

function LastPhone(props) {

    const {avg, phone, description} = props

    return (
        <div className={'last-number'}>
            <div
                className={`last-number-avg bg-${isNaN(avg) ? NUMBER_CLASS_NAME[5] : NUMBER_CLASS_NAME[Math.round(avg) - 1]}`}>
                <span className={'last-number-avg-text'}>{isNaN(avg) ? '0.0' : avg}</span>
            </div>
            <div className={'last-number-text'}>
                <Link to={'/phone/' + phone} className={'last-number-text-number'}>{phone??  <Skeleton className={'skeleton'} height={15} width={100} baseColor={'#663ef5'} inline={true}/>}</Link>
                {
                    description===undefined?
                        <span className={'last-number-text-review'}>{ <Skeleton className={'skeleton'} height={15} baseColor={'#663ef5'} inline={true}/>}</span>:
                        <span className={'last-number-text-review'}>{isNull(description)? 'Nothing :(' : description}</span>
                }
            </div>
        </div>
    )
}

export default LastPhone;
