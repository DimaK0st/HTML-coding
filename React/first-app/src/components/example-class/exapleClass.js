import '../app/app.css'
import {Component, Fragment} from "react";

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this) //1
        // <button onClick={()=>this.nextYear}>+++</button> //2
    }

    // nextYear() {
    nextYear = (e, color) => {
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props

        // Example Fragment
        // return (
        //     <Fragment>
        //
        //     </Fragment>
        // )
        //OR
        // return (
        //     <>
        //
        //     </>
        // )
        return (
            <div>
                <button onClick={this.nextYear}>+++</button>
                <h1>My name is {name}, surname - {surname}, age - {this.state.years}, position
                    - {this.state.position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </div>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name='John' surname='Smith' link='google.com'/>
        </div>
    )
}
