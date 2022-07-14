import {useState} from "react";
import './HomeMenu.scss'
import AddCard from "./AddCard";
import AddDistance from "./AddDistance";
import AddOption from "./AddOption";

const HomeMenu = (props) => {
    const [addNewCard, setAddNewCard] = useState(false)
    const [newDistance, setNewDistance] = useState(false)
    const [newOption, setNewOption] = useState(false)

    const showAddNewCard = (type) => {
        setAddNewCard(type)
    }
    const showNewDistance = (type) => {
        setNewDistance(type)
    }
    const showNewOption = (type) => {
        setNewOption(type)
    }

    return (
        <div className={'new-card-and-millage'}>
            <div className={'menu-row'}>
                <div className={'filter'}>
                    <div className={'btn'}>
                        <button className={props.sort.sortBy==='start'?'checked':''}
                                onClick={()=>props.sort.setSortBy('start')}>Start</button>
                        <button className={props.sort.sortBy==='left'?'checked':''}
                                onClick={()=>props.sort.setSortBy('left')}>Left</button>
                        <button className={props.sort.sortBy==='final'?'checked':''}
                                onClick={()=>props.sort.setSortBy('final')}>Final</button>
                    </div>
                </div>
                <div className={'add-millage'}>
                    {newOption ? null :
                        <button className={'add-distance-btn'} onClick={() => showNewOption(true)}>
                            Add Option
                        </button>}
                    {newOption ? <AddOption showNewOption={showNewOption}/> : null}
                </div>
            </div>
            <div className={'menu-row'}>
                <div className={'new-card'}>
                    {addNewCard ? null :
                        <button className={'add-new-card-btn'} onClick={() => showAddNewCard(true)}>
                            Add new spare part
                        </button>}
                    {addNewCard ? <AddCard addCard={props.addCard} options={props.options} distance={props.distance}
                                           showAddNewCard={showAddNewCard}/> : null}
                </div>
                <div className={'add-millage'}>
                    {newDistance ? null :
                        <button className={'add-distance-btn'} onClick={() => showNewDistance(true)}>
                            Set Distance
                        </button>}
                    {newDistance ? <AddDistance showNewDistance={showNewDistance}
                                                setDistance={props.setDistance}
                                                distance={props.distance}/> : null}
                </div>
            </div>
        </div>
    )
}

export default HomeMenu