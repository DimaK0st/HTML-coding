import phoneIcon from '/assets/phone.svg'
import search from '/assets/search.svg'
import {useLocation, useNavigate, useParams} from "react-router-dom";
import InputMask from 'react-input-mask';
import {useEffect, useState} from "react";
import SearchInput from "../searchInput/SearchInput";

const Header = () => {
    const [phone, setPhone] = useState()

    useEffect(()=>{
        setPhone('/'!==window.location.pathname)
    }, [ useLocation()])

    return (
        <header className={phone ? 'header main-header': 'header'}>
            <img className='logo' alt={'Слава Україні'} src={phoneIcon}/>
            {phone ? <SearchInput/> : <div></div>}
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
