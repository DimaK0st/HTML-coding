import phoneIcon from '/assets/phone.svg'
import search from '/assets/search.svg'
import {useNavigate, useParams} from "react-router-dom";
import InputMask from 'react-input-mask';
import {useEffect, useState} from "react";
import SearchInput from "../searchInput/SearchInput";

const Header = () => {
    const {number} = useParams()
    const [phone, setPhone] = useState()
console.log('number',useParams())
    useEffect(() => {
        setPhone(number)
    }, [number])


    return (
        <header className={'header' + phone ? '' : 'main-header'}>
            <img className='logo' alt={'Слава Україні'} src={phoneIcon}/>
            {phone ? <SearchInput/> : <div></div>}
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
