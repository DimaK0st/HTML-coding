
import './Speedometer.scss'

const Speedometer = (props) => {

    return(
        <div className="speedometer">
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="loader-circle-1">
                    <div className="loader-circle-2"></div>
                </div>
                <div className="needle"></div>
                <div className="loading">{props.value}Km</div>
            </div>
            </div>
    )
}

export default Speedometer