import React, {useEffect, useState} from 'react';
import './lastVisitedNumbers.scss'
import LastNumber from "./lastNumber/LastNumber";

function LastVisitedNumbers(props) {

    return (
        <div className={'last-numbers'}>

            <LastNumber/>

        </div>
    )
}

export default LastVisitedNumbers;
