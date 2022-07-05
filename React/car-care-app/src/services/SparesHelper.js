import {useDispatch} from "react-redux";
import {sparesAddCard, sparesDeleteCard, sparesEditCard, sparesSetDistance, clear} from "../redux/actions";

const SparesHelper = () => {
    const dispatch = useDispatch();

    // dispatch(clear())

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

    return {setDistance, addCard, editCard, deleteCard}
}

export default SparesHelper