import './auth.scss'
import {useEffect, useState} from "react";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from "react-redux";
import {authLogin, authRegister} from "../../redux/actions";
import AuthHelper from "../../services/AuthHelper";

const Login = (props) => {
    const initState = {
        label: '',
        input: '',
        button: '',
    }

    const [form, setForm] = useState(
        {
            login: '',
            password: '',
            repPassword: '',
        }
    )
    const [typeForm, setTypeForm] = useState(initState)
    const [errors, setErrors] = useState({err: true})
    const navigate = useNavigate();
    const authHelper = AuthHelper()
    let err;

    useEffect(()=>{
        setErrors((error)=> {
            console.log('form.password!==form.repPassword && form.login===\'\'',form.password!==form.repPassword && form.login==='')
            return {
            err: form.password!==form.repPassword && form.login==='',
            message: form.password!==form.repPassword? 'Пароли не совпадают': ''
        }})
    },[form])

    const formFunc = () => {
        console.log(errors)
        if(errors.err){
            return
        }
        if (typeForm.label==='Login'){
            setErrors((error)=> {return {...error, message: authHelper.login(form)}})
        }
        if(typeForm.label==='Register'){
            setErrors((error)=> {return {...error, message: authHelper.register(form)}})
        }
    }

    const onValueChange = (name, value) => {
        setForm((form) => {
            return {
                ...form,
                [name]: value
            }
        })
    }

    useEffect(() => {
        switch (props.typeForm) {
            case 'login':
                setTypeForm({
                    label: 'Login',
                    input: <input id="pass" onChange={(e)=>onValueChange('password', e.target.value)} placeholder="Password" type="password"/>,
                    button: 'Login',
                })
                break
            case 'register':
                setTypeForm({
                    label: 'Register',
                    input: <><input id="pass" onChange={(e)=>onValueChange('password', e.target.value)} placeholder="Password" type="password"/>
                        <input id="repass" className={err? 'border': null}
                               onChange={(e)=>onValueChange('repPassword', e.target.value)}
                               placeholder="Repeat password" type="password"/></>,
                    button: 'Register',
                })
                break
            case 'forgot':
                setTypeForm({
                    label: 'Forgot',
                    input: null,
                    button: 'Forgot',
                })
                break
            default:
                setTypeForm({
                    label: null,
                    input: null,
                    button: null,
                })
        }
    }, [props, form])


    const content = (typeForm.label !== null) ?
        <div className={'auth-block'}>
            <label htmlFor="signin">{typeForm.label}</label>
            <div className="wrapper">
                <input id="email" onChange={(e)=>onValueChange('login', e.target.value)} placeholder="Email" type="text"/>
                {typeForm.input}
            </div>
            <button onClick={formFunc}>{typeForm.button}</button>
            {typeForm.button === 'Login' ?
                <button onClick={() => navigate('/register')}>Register</button> : null}
            {typeForm.button === 'Register' ?
                <button onClick={() => navigate('/login')}>Login</button> : null}
            <span style={{color: 'red', fontSize:'20px', margin:'auto'}}>{errors.message}</span>
        </div>
        : null

    return (
        <>
            {content}
        </>
    )
}

export default Login