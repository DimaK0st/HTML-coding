import {useDispatch, useSelector} from "react-redux";
import {authLogin, authRegister} from "../redux/actions";
import {useNavigate} from "react-router-dom";

const AuthHelper = () => {
    const dispatch = useDispatch();
    const authentication = useSelector(state => state.authentication)
    const navigate = useNavigate();

    const login = (data) => {
        if (data.login==='' || data.password===''){
            return
        }

        if (!!authentication.users?.filter(item => item.login === data.login && item.password === data.password).length) {
            dispatch(authLogin())
            navigate('/home')
        }

    }

    const register = (data) => {

        if (data.password.length < 8) {
            return `Пароль слишком короткий введено ${data.password.length} символов, а нужно мин 8`
        }

        if (!authentication.users.filter(item => item.login === data.login).length) {
            dispatch(authRegister({
                login: data.login,
                password: data.password,
            }))
        } else {
            return "Пользователь уже существует!!!"
        }
        navigate('/login')
    }

    return {login, register}
}
export default AuthHelper