import error from './error.gif'

const ErrorMassage = () =>{
    return(
        <img src={error} alt='Error' style={{
            display: 'block',
            width: '250px',
            height: '250px',
            objectFit: 'contain',
            margin: '0 auto'
        }}/>
    )
}

export default ErrorMassage
