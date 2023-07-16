import {useDispatch, useSelector} from "react-redux";
import {inc,dec,rnd} from '../redux/actions'

const Counter = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div className="jumbotron">
            <h1 id="counter">{counter}</h1>
            <button onClick={()=>dispatch(dec())} className="btn btn-primary">DEC</button>
            <button onClick={()=>dispatch(inc())} className="btn btn-primary">INC</button>
            <button onClick={()=>dispatch(rnd())} className="btn btn-primary">rnd</button>
        </div>
    )
}

// const mapStateToProps=(state)=>{
//     return{
//         counter: state.counter
//     }
// }
//
// export default connect(mapStateToProps, actions)(Counter)

export default Counter
