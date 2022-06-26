import './Card.scss'
import edit from '../../assets/card-icons/edit.png'
import del from '../../assets/card-icons/delete.png'
import logo from '../../assets/logo512.png'
import {useState} from "react";
import EditCard from "./EditCard";


const Card = (props) => {
    const [fullDescription, setFullDescription] = useState(false)
    const [editCard, setEditCard] = useState(false)

    const showEditCard = () => {
        console.log(editCard)
        setEditCard((editCard) => !editCard)
    }

    const {id, title, image, start, left, final, description} = props

    const showFullDescription = () => {
        setFullDescription((fullDescription) => !fullDescription)
    }

    let miniDescription = description?.length > 20 ? description.slice(0, 20) : description

    const contentEdit = editCard ? <EditCard showEditCard={showEditCard} props={props}/> : null

    return (
        <div className={'car-item'}>
            <input type="hidden" value={id}/>
            <span className={'title'}>
                Name: <span className={'value'}>{title}</span>
            </span>
            <img className={'image'} src={logo}/>
            <span className={'kilometers'}>
                Start km: <span className={'value'}>{start}</span>
            </span>
            <span className={'kilometers'}>
                Left km: <span className={'value'}>{left}</span>
            </span>
            <span className={'kilometers'}>
                Final km: <span className={'value'}>{final}</span>
            </span>
            <span className={'kilometers'}>
                Description: <span className={'value'}>{fullDescription ? description : miniDescription}
                <a onClick={showFullDescription}>{fullDescription ? '<--' : '...'}</a></span>
            </span>
            <img className={'edit-icon'} src={edit} onClick={showEditCard}/>
            <img className={'delete-icon'} src={del}/>

            {contentEdit}
        </div>
    )
}

export default Card