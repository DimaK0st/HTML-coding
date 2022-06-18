
import './Card.scss'
import logo from '../../assets/logo512.png'
import edit from '../../assets/card-icons/edit.png'
import del from '../../assets/card-icons/delete.png'


const Card = () => {

    return(
        <div className={'car-item'}>
            <span className={'title'}>
                Name: <span className={'value'}>Engine</span>
            </span>
            <img className={'image'} src={logo} />
            <span className={'kilometers'}>
                Start km: <span className={'value'}>100</span>
            </span>
            <span className={'kilometers'}>
                Left km: <span className={'value'}>2000</span>
            </span>
            <span className={'kilometers'}>
                Final km: <span className={'value'}>25000</span>
            </span>
            <img className={'edit-icon'} src={edit}/>
            <img className={'delete-icon'} src={del}/>
        </div>
    )
}

export default Card