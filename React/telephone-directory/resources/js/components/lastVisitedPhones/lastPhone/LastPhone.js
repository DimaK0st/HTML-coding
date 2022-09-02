import React, {useEffect, useState} from 'react';
import './lastPhone.scss'
import NUMBER_CLASS_NAME from "../../../_CONST";
import {isNull} from "lodash";

function LastPhone(props) {

    const {avg, phone, description} = props

    return (
        <div className={'last-number'}>
            <div
                className={`last-number-avg bg-${isNaN(avg) ? NUMBER_CLASS_NAME[5] : NUMBER_CLASS_NAME[Math.round(avg) - 1]}`}>
                <span className={'last-number-avg-text'}>{isNaN(avg) ? '0.0' : avg}</span>
            </div>
            <div className={'last-number-text'}>
                <span className={'last-number-text-number'}>{phone}</span>
                <span className={'last-number-text-review'}>{isNull(description)? 'Nothing :(' : description}</span>
            </div>
        </div>
    )
}

export default LastPhone;
