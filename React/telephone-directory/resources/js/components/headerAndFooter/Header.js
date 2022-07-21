import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './header.scss'

const Header = () => {

    return(
        <header>
            <img  alt={'Слава Україні'} src={phone}/>
            <form className={'input-wrapper'}>
                <span>+38</span>
                <img src={search}/>
                <input placeholder={'097-123-45-67'}/>
            </form>
            <span style={{visibility: 'hidden'}}>TODO...</span>
        </header>
    )
}

export default Header
