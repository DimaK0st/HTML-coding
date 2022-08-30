import React, {useEffect, useState} from 'react';
import './lastNumber.scss'

function LastNumber(props) {

    return (
        <div className={'last-number'}>
            <div className={'last-number-avg'}></div>
            <div className={'last-number-text'}>
                <span className={'last-number-text-number'}></span>
                <span className={'last-number-text-review'}></span>
            </div>
        </div>
    )
}

export default LastNumber;
