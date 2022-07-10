import {useState} from "react";
import './AddNewCardAndMillage.scss'
import AddCard from "./AddCard";
import AddDistance from "./AddDistance";

const AddNewCardAndMillage = (props) => {
    const [addNewCard, setAddNewCard] = useState(false)
    const [newDistance, setNewDistance] = useState(false)

    const showAddNewCard = (type) => {
        setAddNewCard(type)
    }
    const showNewDistance = (type) => {
        setNewDistance(type)
    }

    return (
        <div className={'new-card-and-millage'}>
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
                                            distance={props.distance}/> : null}            </div>
        </div>
    )
}

export default AddNewCardAndMillage