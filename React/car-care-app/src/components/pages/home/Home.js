import MainContent from "../mainContent/mainContent";
import Card from "../../elementCard/Card";
import './Home.scss'
import Speedometer from "../../speedometer/Speedometer";
import AddNewCard from "../../elementCard/AddNewCard";
import SparesHelper from "../../../services/SparesHelper";
import {useCallback} from "react";

const Home = () => {

    const sparesHelper = SparesHelper()
    sparesHelper.setDistance(12341234)

    const addCard = useCallback((value) => {
      sparesHelper.addCard(value)
    })


    return (
        <div className={'home-wrapper'}>
            <Speedometer value={sparesHelper.getDistance()}/>
            <AddNewCard addCard={addCard}/>
            <div className={'car-list'}>
                <Card id='asdfa' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card id='asdas' title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
            </div>
        </div>
    )
}

export default Home