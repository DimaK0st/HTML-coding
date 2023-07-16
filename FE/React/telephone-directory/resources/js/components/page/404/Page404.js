import React from 'react';
import {useNavigate} from "react-router-dom";

function Page404(props) {
    let navigate = useNavigate();

    return (
        <div className={'page-404'}>
            <div className="page-404__title">
                <span className={'page-404__title-text'}>404</span>
            </div>
            <div className={'page-404__bottom'}>
                <h3>Ой, щось пішло не так</h3>
                <p>На жаль, запитувана сторінка не знайдена.</p>
                <a href="#" className="btn" onClick={() => {
                    navigate('/')
                }}>Назад на головну сторінку</a>
            </div>
        </div>
    )
}

export default Page404;