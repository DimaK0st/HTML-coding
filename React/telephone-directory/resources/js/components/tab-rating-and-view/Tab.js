import React, {useEffect, useState} from 'react';

import './tab.scss'
import Rating from "./rating/Rating";
import Chart from "./сhart/Chart";
import Skeleton from "react-loading-skeleton";

const RATING = 'rating'
const VIEW = 'view'

function Tab(props) {
    const {view, rating, loaded} = props
    const [tabType, setTabType] = useState(RATING)
    const [tabContent, setTabContent] = useState(<Rating rating={rating}/>)

    useEffect(() => {
        console.log('update Tab------------------', loaded)
        if (!loaded) {
            return
        }

        switch (tabType) {

            case RATING:
                setTabContent(<Rating rating={rating}/>)
                break

            case VIEW:
                setTabContent(
                    <Chart chart={view.chart}/>
            )
                break

        }
    }, [tabType, props])


    return (

        <div className={'tab'}>

            <div className={'tab-menu'}>
                <button className={`tab-menu-btn ${RATING === tabType ? 'selected' : ''}`}
                        onClick={() => setTabType(RATING)}>
                    {'Оцінка'} ({rating?.count ??
                    <Skeleton height={15} width={30} baseColor={'#663ef5'} inline={true}/>}×)
                </button>
                <button className={`tab-menu-btn ${VIEW === tabType ? 'selected' : ''}`}
                        onClick={() => setTabType(VIEW)}>
                    {'Переглядів'} ({view?.count ??
                    <Skeleton height={15} width={30} baseColor={'#663ef5'} inline={true}/>}×)
                </button>
            </div>
            <div className={'tab-content'}>
                {tabContent}
            </div>
        </div>

    )
}

export default Tab;
