import MainContent from "../mainContent/mainContent";
import Card from "../../elementCard/Card";
import './Home.scss'
import Speedometer from "../../speedometer/Speedometer";
import AddNewCard from "../../elementCard/AddNewCard";

const Home = () => {

    return (
        <div>
            <Speedometer value={999999}/>
            <AddNewCard/>
            <div className={'car-list'}>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Home