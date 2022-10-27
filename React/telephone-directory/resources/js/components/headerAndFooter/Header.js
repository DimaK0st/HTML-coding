import phoneIcon from '/assets/phone.svg'
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import SearchInput from "../searchInput/SearchInput";
import './header.scss'

const Header = () => {
    const [phone, setPhone] = useState()
    let navigate = useNavigate();

    useEffect(() => {
        setPhone('/' !== window.location.pathname)
    }, [useLocation()])

    return (
        <header className={phone ? 'header main-header' : 'header'}>
            <img className='logo' alt={'Слава Україні'} src={phoneIcon} onClick={() => {
                navigate('/')
            }}/>
            {phone ? <SearchInput/> : <div></div>}
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
