import Card from "../../elementCard/Card";
import './Home.scss'
import Speedometer from "../../speedometer/Speedometer";
import SparesHelper from "../../../services/SparesHelper";
import {useCallback, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import HomeMenu from "../../elementCard/HomeMenu";

const Home = () => {
    const spares = useSelector(state => state.spares)
    const distance = spares.distance?.slice(-1)[0].value
    const [cardList, setCardList] = useState(
        [...spares.cardList].sort((a, b) => parseInt(a.final) - distance > parseInt(b.final) - distance ? 1 : -1),
    )
    const [sortBy, setSortBy] = useState('left')

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

    useEffect(() => {
        sortArray(sortBy)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy, spares.cardList])

    const sortArray = (field) => {
        switch (field) {
            case 'start':
                return setCardList([...spares.cardList].sort((a, b) => parseInt(a.start) > parseInt(b.start) ? 1 : -1))
            case 'left':
                return setCardList([...spares.cardList].sort((a, b) => parseInt(a.final) - distance > parseInt(b.final) - distance ? 1 : -1))
            case 'final':
                return setCardList([...spares.cardList].sort((a, b) => parseInt(a.final) > parseInt(b.final) ? 1 : -1))
            default:
                return setCardList([...spares.cardList])
        }
    }

    const content = cardList.map((item) => {
            return <Card data={item}
                         options={spares.options}
                         distance={distance}
                         editCard={editCard}
                         deleteCard={deleteCard}/>
        }
    )

    return (
        <div className={'home-wrapper'}>
            <Speedometer value={distance}/>
            <HomeMenu sort={{sortBy, setSortBy}} distance={distance} addCard={addCard} options={spares.options}
                      setDistance={setDistance}/>
            <div className={'car-list'}>
                {content}
            </div>
        </div>
    )
}

export default Home