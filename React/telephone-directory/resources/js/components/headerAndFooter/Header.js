import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import {useNavigate} from "react-router-dom";
import InputMask from 'react-input-mask';
import {useState} from "react";
import SearchInput from "../searchInput/SearchInput";

const Header = () => {

    return (
        <header className={'header'}>
            <img className='logo' alt={'Слава Україні'} src={phone}/>
            <SearchInput/>
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
