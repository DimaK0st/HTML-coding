import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import './header.scss'

const Header = () => {

    return(
        <header className={'header'}>
            <img className='logo'  alt={'Слава Україні'} src={phone}/>
            <form className={'number header__number'}>
                <span className={'number__code'}>+38</span>
                <img className={'number__search'} src={search}/>
                <input type="text" className={'number__input'} placeholder={'097-123-45-67'}/>
            </form>
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
