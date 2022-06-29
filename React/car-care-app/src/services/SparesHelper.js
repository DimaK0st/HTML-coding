import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {sparesAddCard, sparesEditCard} from "../redux/actions";

const SparesHelper = () => {

    const [cookies, setCookie] = useCookies(['Spares']);

    const spares = useSelector(state => state.spares)
    const dispatch = useDispatch();

    const setDistance = (distance) => {
        setCookie('distance', distance, {path: '/'})
    }

    const getDistance = () => {
        return cookies.distance
    }

    const getCards = () => {
        if (cookies?.cardsList === undefined) {
            return []
        } else {
            return cookies.cardsList
        }
    }

    const editCard = (object) => {
      dispatch(sparesEditCard(object))
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const addCard = (value) => {
        dispatch(sparesAddCard(value))
    }


    return {setDistance, getDistance, addCard, editCard, getCards}
}

export default SparesHelper