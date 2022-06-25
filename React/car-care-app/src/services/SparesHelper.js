import {useCookies} from "react-cookie";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {sparesAddCard} from "../redux/actions";

const SparesHelper = () => {

    const [cookies, setCookie] = useCookies(['Spares']);

    const spares = useSelector(state => state.spares)
    const dispatch = useDispatch();

    useEffect((spares)=>{
        console.log(spares)
    },[])

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

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const addCard = (value) => {
        console.log('asdfasdf')
        dispatch(sparesAddCard(value))
    }


    return {setDistance, getDistance, addCard, getCards}
}

export default SparesHelper