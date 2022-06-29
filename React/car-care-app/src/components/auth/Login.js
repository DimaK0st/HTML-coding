import './auth.scss'
import {useEffect, useState} from "react";

const Login = (props) => {
    const initState = {
        label: '',
        input: '',
        button: '',
    }

    const [typeForm, setTypeForm] = useState(initState)

    useEffect(() => {
        switch (props.typeForm) {
            case 'login':
                setTypeForm({
                    label: 'Login',
                    input: <input id="pass" placeholder="Password" type="password"/>,
                    button: 'Login',
                })
                break
            case 'register':
                setTypeForm({
                    label: 'Register',
                    input: <><input id="pass" placeholder="Password" type="password"/>
                        <input id="repass" placeholder="Repeat password" type="password"/></>,
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
    }, [props])


    const content = (typeForm.label !== null) ?
        <div className={'auth-block'}>
            <label htmlFor="signin">{typeForm.label}</label>
            <div className="wrapper">
                <input id="email" placeholder="Email" type="text"/>
                {typeForm.input}
            </div>
            <button type="submit">{typeForm.button}</button>
        </div>
        : null

    return (
        <>
            {content}
        </>
    )
}

export default Login