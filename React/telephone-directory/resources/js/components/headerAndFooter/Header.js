import phoneIcon from '/assets/phone.svg'
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import SearchInput from "../searchInput/SearchInput";

const Header = () => {
    const [phone, setPhone] = useState()

    useEffect(() => {
        setPhone('/' !== window.location.pathname)
    }, [useLocation()])

    return (
        <header className={phone ? 'header main-header' : 'header'}>
            <img className='logo' alt={'Слава Україні'} src={phoneIcon}/>
            {phone ? <SearchInput/> : <div></div>}
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
