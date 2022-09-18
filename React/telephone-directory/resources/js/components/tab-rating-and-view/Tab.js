import React, {useEffect, useState} from 'react';

import './tab.scss'
import Rating from "./rating/Rating";
import Chart from "./сhart/Chart";

const RATING = 'rating'
const VIEW = 'view'

function Tab(props) {
    const {view, rating} = props
    const [tabType, setTabType] = useState(RATING)
    const [tabContent, setTabContent] = useState(<Rating rating={rating}/>)
    let menuContent
    let textMenuValue = [RATING,VIEW]

    // useEffect(()=>{
    //     showTab(RATING)
    // }, [])

    useEffect(() => {
        switch (tabType) {

            case RATING:
                setTabContent(<div className={'tab-content'}><Rating rating={rating}/></div>)
                break

            case VIEW:
                setTabContent(
                    <div className={'tab-content'}><Chart chart={view.chart}/></div>
                )
                break

        }
    }, [tabType])


    return (

        <div className={'tab'}>

            <div className={'tab-menu'}>
                <button className={`tab-menu-btn ${RATING===tabType? 'selected':''}`} onClick={() => setTabType(RATING)}>
                    {'Оцінка'} ({rating.count}×)
                </button>
                <button className={`tab-menu-btn ${VIEW===tabType? 'selected':''}`} onClick={() => setTabType(VIEW)}>
                    {'Переглядів'} ({view.count}×)
                </button>
            </div>

                    {tabContent}

        </div>

    )
}

export default Tab;
