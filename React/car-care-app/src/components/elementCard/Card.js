import './Card.scss'
import edit from '../../assets/card-icons/edit.png'
import del from '../../assets/card-icons/delete.png'
import logo from '../../assets/logo512.png'
import {useState} from "react";
import EditCard from "./EditCard";
import {options} from "../../redux/reducers/constOptions";


const Card = (props) => {
    const [fullDescription, setFullDescription] = useState(false)
    const [editedCard, setEditedCard] = useState(false)
    const {id, title, image, start, left, final, description} = props.data

    console.log(id, title, image, start, left, final, description)

    const showEditCard = () => {
        setEditedCard((editCard) => !editCard)
    }

    const editCard = (editForm) => {
        setEditedCard(false)
        props.editCard(editForm)
    }

    const deleteCard = () => {
        props.deleteCard(id)
    }

    const showFullDescription = () => {
        setFullDescription((fullDescription) => !fullDescription)
    }

    let miniDescription = description?.length > 20 ? description.slice(0, 20) : description

    const contentEdit = editedCard ?
        <EditCard editCard={editCard} showEditCard={showEditCard} props={props}/> : null

    return (
        <div className={'car-item'}>
            <input type="hidden" value={id}/>
            <span className={'title'}>
                Name: <span className={'value'}>{options.filter(item=> item.value===title)[0].name}</span>
            </span>
            <img className={'image'} src={logo} alt='img'/>
            <span className={'kilometers'}>
                Start km: <span className={'value'}>{start}</span>
            </span>
            <span className={'kilometers'}>
                Left km: <span className={'value'}>{parseInt(final)-props.distance}</span>
            </span>
            <span className={'kilometers'}>
                Final km: <span className={'value'}>{final}</span>
            </span>
            <span className={'kilometers'}>
                Description: <span className={'value'}>{fullDescription ? description : miniDescription}
                <p onClick={showFullDescription}>{fullDescription ? '<--' : '...'}</p></span>
            </span>
            <img className={'edit-icon'} src={edit} onClick={showEditCard} alt='img'/>
            <img className={'delete-icon'} src={del} onClick={deleteCard} alt='img'/>

            {contentEdit}
        </div>
    )
}

export default Card