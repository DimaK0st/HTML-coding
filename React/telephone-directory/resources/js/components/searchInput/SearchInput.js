import search from "../../../../public/assets/search.svg";
import InputMask from "react-input-mask";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const SearchInput = () => {

    let navigate = useNavigate();
    const [data, setData] = useState({
        value: '',
        obj: '',
    })

    const onSubmit = (event) => {
        event.preventDefault();

        let phone = data?.value.replace(/-/g, '');

        if (phone.length === 10) {
            navigate('/phone/38' + phone)
            setData('')
            data?.obj.blur()
        }
    }

    return (
        <form className={'number header__number'} onSubmit={onSubmit}>
            <span className={'number__code'}>+38</span>
            <img className={'number__search'} src={search} />
            <InputMask
                className={'number__input'}
                placeholder={'097-123-45-67'}
                mask="999-999-99-99"
                maskChar="_"
                value={data?.value}
                onChange={(e) => setData({value: e.target.value, obj: e.currentTarget})}/>
        </form>
    )
}

export default SearchInput
