import './Main.scss'
import image from '../../../assets/mainImg.svg'

const Main = () => {


    return(
        <div className={'main-wrapper'}>

            <h1 className='title'>Car Care</h1>
            <p className='description'> Сайт сделанный для помощи в слежении за своевременной заменой автомобильных запчастей.</p>
            <img className={'main-image'} src={image} alt={'Слава Україні'}/>
        </div>
    )
}

export default Main