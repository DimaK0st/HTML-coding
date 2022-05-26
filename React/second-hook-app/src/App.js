import {Component, useCallback, useEffect, useMemo, useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
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
            'https://www.planetware.com/wpimages/2022/05/florida-tarpon-springs-things-to-do-sponge-docks-boats.jpg',
        ]
    }, [state])

    function countTotal(slide){
        console.log('countTotal')
        return slide + 10
    }

    function changeSlide(i) {
        setState(state => state + i)
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay)
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

function App() {
    return (
        <Slider/>
    );
}

export default App;
