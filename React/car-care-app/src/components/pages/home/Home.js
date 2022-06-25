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
      sparesHelper.addCard(value)
    })

    const spares = useSelector(state => state.spares)
    console.log('spares', spares)
    console.log('spares.cardList', spares.cardList)
    console.log('spares.cardList', spares.cardList.length)

    const content = spares.cardList.map(item=>{
        return <Card id={item.id} title={item.option} start={item.Start} left={item.Start} final={item.Final} description={item.Description}/>}
    )

    return (
        <div className={'home-wrapper'}>
            <Speedometer value={sparesHelper.getDistance()}/>
            <AddNewCard addCard={addCard}/>
            <div className={'car-list'}>
                {content}
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
            </div>
        </div>
    )
}

export default Home