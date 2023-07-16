import {useDispatch} from "react-redux";
import {
    sparesAddCard,
    sparesDeleteCard,
    sparesEditCard,
    sparesSetDistance,
    sparesAddOption
} from "../redux/actions";

const SparesHelper = () => {
    const dispatch = useDispatch();

    const editCard = (object) => {
        dispatch(sparesEditCard(object))
    }

    const deleteCard = (id) => {
        dispatch(sparesDeleteCard(id))
    }

    const addCard = (value) => {
        dispatch(sparesAddCard(value))
    }

    const addOption = (value) => {
        dispatch(sparesAddOption(value))
    }

    const setDistance = (value) => {
        dispatch(sparesSetDistance(value))
    }

    return {setDistance, addCard, editCard, deleteCard, addOption}
}

export default SparesHelper