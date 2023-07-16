import search from "../../../../public/assets/search.svg";
import InputMask from "react-input-mask";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchInput = () => {
    const defaultState = {
        value: '',
        obj: '',
    }
    let navigate = useNavigate();
    const [data, setData] = useState(defaultState)

    const onSubmit = (event) => {
        event.preventDefault();

        let phone = data?.value.replace(/-/g, '');

        if (phone.length === 10) {
            navigate('/phone/38' + phone)
            setData(defaultState)
            data?.obj.blur()
        }
    }

    return (
        <form className={'number header__number'} onSubmit={onSubmit}>
            <span className={'number__code'}>+38</span>
            <img className={'number__search'} src={search} onClick={onSubmit}/>
            <InputMask
                className={'number__input'}
                type={'text'}
                placeholder={'097-123-45-67'}
                mask="999-999-99-99"
                maskChar="_"
                value={data?.value}
                onChange={(e) => setData({value: e.target.value, obj: e.currentTarget})}/>
        </form>
    )
}

export default SearchInput
