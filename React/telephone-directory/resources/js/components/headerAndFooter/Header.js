import phone from '/assets/phone.svg'
import search from '/assets/search.svg'
import {useNavigate} from "react-router-dom";
import InputMask from 'react-input-mask';
import {useState} from "react";

const Header = () => {

    let navigate = useNavigate();
    const [data, setData] = useState()

    const onSubmit = (event)=>{
        event.preventDefault();

        let phone = data?.value.replace(/-/g, '');

        if (phone.length===10){
            navigate('/phone/38'+phone)
            setData('')
            data?.obj.blur()
        }
    }

    return (
        <header className={'header'}>
            <img className='logo' alt={'Слава Україні'} src={phone}/>
            <form className={'number header__number'}
                  onSubmit={onSubmit}
            >
                <span className={'number__code'}>+38</span>
                <img className={'number__search'} src={search}/>
                <InputMask
                    className={'number__input'}
                    placeholder={'097-123-45-67'}
                    mask="999-999-99-99"
                    maskPlaceholder="-"
                    value={data?.value}

                    onChange={(e)=>setData({value: e.target.value, obj: e.currentTarget})} />

            </form>
            <span className={'todo'}>TODO...</span>
        </header>
    )
}

export default Header
