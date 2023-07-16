import './Main.scss'
import image from '../../../assets/mainImg.svg'
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();


    return (
        <div className={'main-wrapper'}>

            <h1 className='title'>Car Care</h1>
            <p className='description'> Сайт сделанный для помощи в слежении за своевременной заменой автомобильных
                запчастей.</p>
            <br/>
            <p className='description' style={{cursor:"pointer", color:"orange"}} onClick={()=>navigate('/home')}>Поехали</p>
            <img className={'main-image'} src={image} alt={'Слава Україні'}/>
        </div>
    )
}

export default Main