import '../app/app.css'
import {Component, Fragment} from "react";
import styled from "styled-components";

const EmpItem = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);

  a{
    display: block;
    margin: 10px 0 10px 0;
    color: ${props => props.active? 'orange': 'black'};
  }
`

const Header = styled.h2`
  font-size: 22px;
`

const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid rgba(0, 0, 0, .2);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
`

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
`

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
            <EmpItem active={false}>
                <Button onClick={this.nextYear}>+++</Button>
                <BigButton as='a' onClick={this.nextYear}>+++</BigButton>
                <Header>My name is {name}, surname - {surname}, age - {this.state.years}, position
                    - {this.state.position}</Header>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type='text' onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </EmpItem>
        )
    }
}

const Wrapper = styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
  background: #5e5e5d;

`

function App() {

    // static logHello =()=>{
    //     console.log('Hello')
    // }
    // App.logHello()
    return (
        <Wrapper>
            <div className='App'>
                <WhoAmI name='John' surname='Smith' link='google.com'/>
            </div>
        </Wrapper>
    )
}

export default App
