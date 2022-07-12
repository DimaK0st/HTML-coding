import Card from "../../elementCard/Card";
import './Home.scss'
import Speedometer from "../../speedometer/Speedometer";
import SparesHelper from "../../../services/SparesHelper";
import {useCallback} from "react";
import {useSelector} from "react-redux";
import AddNewCardAndMillage from "../../elementCard/AddNewCardAndMillage";

const Home = () => {

    const sparesHelper = SparesHelper()

    const addCard = useCallback((value) => {
        sparesHelper.addCard(value)
    }, [sparesHelper])
    const setDistance = useCallback((value) => {
        sparesHelper.setDistance(value)
    }, [sparesHelper])
    const editCard = useCallback((value) => {
        sparesHelper.editCard(value)
    }, [sparesHelper])
    const deleteCard = useCallback((value) => {
        sparesHelper.deleteCard(value)
    }, [sparesHelper])

    const spares = useSelector(state => state.spares)
    const distance = spares.distance?.slice(-1)[0].value
    let cardList = [...spares.cardList].sort((a,b)=> parseInt(a.final)-distance>parseInt(b.final)-distance ? 1 : -1)

    const content = cardList.map(item => {
            return <Card data={item}
                         distance={distance}
                         editCard={editCard}
                         deleteCard={deleteCard}/>
        }
    )

    return (
        <div className={'home-wrapper'}>
            <Speedometer value={distance}/>
            <AddNewCardAndMillage distance={distance} addCard={addCard} options={spares.options} setDistance={setDistance}/>
            <div className={'car-list'}>
                {content}
            </div>
        </div>
    )
}

function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

export default Home