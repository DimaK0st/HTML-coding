import MainContent from "../mainContent/mainContent";
import Card from "../../elementCard/Card";
import './Home.scss'
import Speedometer from "../../speedometer/Speedometer";
import AddNewCard from "../../elementCard/AddNewCard";
import SparesHelper from "../../../services/SparesHelper";
import {useCallback} from "react";
import {useSelector} from "react-redux";

const Home = () => {

    const sparesHelper = SparesHelper()
    sparesHelper.setDistance(12341234)

    const addCard = useCallback((value) => {
        console.log('addCard',value)
      sparesHelper.addCard(value)
    })
    const editCard = useCallback((value) => {
      sparesHelper.editCard(value)
    })
    const deleteCard = useCallback((value) => {
      sparesHelper.deleteCard(value)
    })

    const spares = useSelector(state => state.spares)

    const content = spares.cardList.map(item=>{
        return <Card data={item}
                     editCard={editCard}
                     deleteCard={deleteCard}/>}
    )

    return (
        <div className={'home-wrapper'}>
            <Speedometer value={sparesHelper.getDistance()}/>
            <AddNewCard addCard={addCard}/>
            <div className={'car-list'}>
                {content}
            </div>
        </div>
    )
}

export default Home