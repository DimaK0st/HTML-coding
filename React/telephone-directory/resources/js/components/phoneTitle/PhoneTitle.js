import React, {useEffect, useState} from 'react';
import './phoneTitle.scss'
import {useParams} from "react-router-dom";

function PhoneTitle(props) {
    const {number} = useParams()

    return (
        <div className={'title'}>
            <div className={'title-numbers'}>

            </div>
            <div className="title-tags">
                <div className="title-tags-item">

                </div>

            </div>

        </div>
    )
}

export default PhoneTitle;
