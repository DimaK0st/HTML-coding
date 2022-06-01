import {useCallback, useEffect, useMemo, useReducer, useState} from "react";
import {Container} from "react-bootstrap";
import Slide from "./Slide";


function reducer(state, action){
    switch (action.type){
        case 'toggle':
            return {autoplay: !state.autoplay}
        case 'slow':
            return {autoplay: 300}
        case 'fast':
            return {autoplay: 700}
        case 'custom':
            return {autoplay: action.payload}
        default:
            throw new Error()

    }
}

const Slider = (props) => {

    const [state, setState] = useState(0)
    const [autoplay, dispatch] = useReducer(reducer, false)

    const getSomeImages = useCallback(() => {
        console.log('fetch!!')
        return [
            'https://www.planetware.com/wpimages/2022/05/florida-tarpon-springs-things-to-do-sponge-docks-boats.jpg',
        ]
    }, [state])

    function countTotal(slide) {
        console.log('countTotal')
        return slide + 10
    }

    function changeSlide(i) {
        setState(state => state + i)
    }

    const total = useMemo(()=>{
        return countTotal(state)
    }, [state])

    function logging() {
        console.log('log!!!')
    }

    useEffect(() => {
        document.title = `Slide ${state}`

        window.addEventListener('click', logging)

        return () => {// При удалении компонента срабатывает return и в этот момент можно удалить все обработчики
            window.removeEventListener('click', logging)
        }
    })

    return (
        <Container>
            <div className="slider w-50 m-auto">

                <Slide getSomeImages={getSomeImages}/>

                <div className="text-center mt-5">Active slide {state}
                </div>
                <div className="text-center mt-5">{total} <br/>
                    {autoplay.autoplay ? 'auto: '+autoplay.autoplay : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={()=>dispatch({type: 'toggle'})}>toggle autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={()=>dispatch({type: 'slow'})}>slow autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={()=>dispatch({type: 'fast'})}>fast autoplay
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={(e)=>dispatch({type: 'custom', payload: +e.target.textContent})}>1000
                    </button>
                </div>
            </div>
        </Container>
    )
}

export default Slider
