import {useCookies} from "react-cookie";
import {useDispatch} from "react-redux";
import {sparesAddCard, sparesDeleteCard, sparesEditCard, sparesSetDistance,clear} from "../redux/actions";

const SparesHelper = () => {

    const [cookies, setCookie] = useCookies(['Spares']);

    const dispatch = useDispatch();

    // dispatch(clear())

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

    const deleteCard = (id) => {
      dispatch(sparesDeleteCard(id))
    }

    const addCard = (value) => {
        dispatch(sparesAddCard(value))
    }

    const setDistance = (value) => {
        dispatch(sparesSetDistance(value))
    }


    return {setDistance, addCard, editCard, deleteCard, getCards}
}

export default SparesHelper