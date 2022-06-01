import {Component,useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import Slider from "./components/Slider";
import Modal from "./components/Modal";
import * as PropTypes from "prop-types";
import FormWithHookFormik from "./components/FormWithHookFormik";
import SliderClass from "./components/SliderClass";



class ModalTwo extends Component {
    render() {
        return null;
    }
}

ModalTwo.propTypes = {
    show: PropTypes.bool,
    setShowTrigger: PropTypes.func,
    onClose: PropTypes.func
};

function App() {
    const [showModal, setShowModal] = useState(false);
    const [showTrigger, setShowTrigger] = useState(true);

    return (
        <>
            <FormWithHookFormik/>
            <Slider/>
            <SliderClass/>
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
