import {useCookies} from "react-cookie";

const SparesHelper = () => {

    const [cookies, setCookie] = useCookies(['Spares']);

    const setDistance = (distance) => {
        setCookie('distance', distance, {path: '/'})
    }

    const getDistance = () => {
        return cookies.distance
    }

    const addCard = (value) => {
        setCookie('cardsList', value, {path: '/'})
    }


    return {setDistance, getDistance, addCard}
}

export default SparesHelper