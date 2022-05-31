import {Component, useCallback, useEffect, useMemo, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import {CSSTransition, Transition} from "react-transition-group";
// class Slider extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }
//
//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }
//
//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }
//
//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = (props) => {

    const [state, setState] = useState(0);
    const [autoplay, setAutoplay] = useState(false)

    const getSomeImages = useCallback(() => {
        console.log('fetch!!')
        return [
            'https://www.planetware.com/wpimages/2022/05/florida-tarpon-springs-things-to-do-sponge-docks-boats.jpg',
``        ]
    }, [state])

    function countTotal(slide) {
        console.log('countTotal')
        return slide + 10
    }

    function changeSlide(i) {
        setState(state => state + i)
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
    }

    const total = useMemo(() => {
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
                    {autoplay ? 'auto' : null}
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
                        onClick={toggleAutoplay}>toggle autoplay
                    </button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getSomeImages}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        setImages(getSomeImages())
    }, [getSomeImages])

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide"/>)}
        </>
    )
}


const Modal = (props) => {

    const duration = 300

    const defaultStyle = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity: 0,
        visibility: 'hidden',
    }

    const transitionStyles = {
        entering: {opacity: 1, visibility: 'visible'},
        entered: {opacity: 1, visibility: 'visible'},
        exiting: {opacity: 0, visibility:'hidden'},
        exited: {opacity: 0, visibility:'hidden'},
    }

    return (
        <Transition
            in={props.show}
            timeout={duration}
            onEnter={()=>props.setShowTrigger(false)}
            onExited={()=>props.setShowTrigger(true)}
        >
            {state => (
                <div className="modal mt-5 d-block" style={
                    {
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }
                }>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Typical modal window</h5>
                                <button onClick={() => props.onClose(false)} type="button" className="btn-close"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body content</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => props.onClose(false)} type="button"
                                        className="btn btn-secondary">Close
                                </button>
                                <button onClick={() => props.onClose(false)} type="button"
                                        className="btn btn-primary">Save
                                    changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Transition>
    )
}

const ModalTwo = (props) => {

    const duration = 300

    return (
        <CSSTransition
            in={props.show}
            timeout={duration}
            onEnter={()=>props.setShowTrigger(false)}
            onExited={()=>props.setShowTrigger(true)}
            classNames='modal'
        >
                <div className="modal mt-5 d-block">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Typical modal window</h5>
                                <button onClick={() => props.onClose(false)} type="button" className="btn-close"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body content</p>
                            </div>
                            <div className="modal-footer">
                                <button onClick={() => props.onClose(false)} type="button"
                                        className="btn btn-secondary">Close
                                </button>
                                <button onClick={() => props.onClose(false)} type="button"
                                        className="btn btn-primary">Save
                                    changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </CSSTransition>
    )
}

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true);

    return (
        <>
            <Slider/>
            <Container>
                <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
                {showTrigger?
                <button
                    type="button"
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>Open Modal
                </button>
                :null}
            </Container>
            <Container>
                <ModalTwo show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger}/>
                {showTrigger?
                <button
                    type="button"
                    className="btn btn-warning mt-5"
                    onClick={() => setShowModal(true)}>Open Modal
                </button>
                :null}
            </Container>
        </>
    );
}

export default App;
