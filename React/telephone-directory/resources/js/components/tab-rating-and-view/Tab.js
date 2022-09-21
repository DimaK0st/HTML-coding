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

        if (!loaded) {
            return
        }

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

            {tabContent}

        </div>

    )
}

export default Tab;
