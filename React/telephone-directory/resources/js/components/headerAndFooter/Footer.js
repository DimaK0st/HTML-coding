import './footer.scss'

const Footer = () => {

    return(
        <footer className={'footer'}>
            <div className={'footer-wrapper'}>

                <a className={'footer-wrapper-item'} href={'https://www.callinsider.com.ua/p/zahalni-umovy'} target="_blank">Загальні умови</a>
                <a className={'footer-wrapper-item'} href={'https://www.callinsider.com.ua/p/pryntsypy-zakhystu-osobystykh-danykh'} target="_blank">Охорона особистих даних</a>
                <a className={'footer-wrapper-item'} href={'https://www.callinsider.com.ua/statti'} target="_blank">Статті</a>
                <a className={'footer-wrapper-item'} href={'https://www.callinsider.com.ua/p/chasti-pytannya'} target="_blank">Часті питання</a>
                <a className={'footer-wrapper-item'} href={'https://www.callinsider.com.ua/p/pro-nas'} target="_blank">Про нас</a>
                <a className={'footer-wrapper-item'} href={'https://www.callinsider.com.ua/p/kontakt'} target="_blank">Контакт</a>

            </div>
        </footer>
    )
}

export default Footer

