import MainContent from "../mainContent/mainContent";
import Card from "../../elementCard/Card";
import './Home.scss'
import Speedometer from "../../speedometer/Speedometer";
import AddNewCard from "../../elementCard/AddNewCard";

const Home = () => {

    return (
        <div className={'home-wrapper'}>
            <Speedometer value={999999}/>
            <AddNewCard/>
            <div className={'car-list'}>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd fasdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
                <Card title='Engine' start='2500' left='3500' final='32000' description='asdf asdf a sdf  sdf sd ff d f s dfa  sd fa sd fa s df a sd f '/>
            </div>
        </div>
    )
}

export default Home