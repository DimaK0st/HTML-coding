import './employees-list-item.css'
import {Component} from "react";

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            star: false
        }
    }

    onIncrease = () => {
        this.setState(state => ({
            increase: !state.increase
        }))
    }

    onStar = () => {
        this.setState(state => ({
            star: !state.star
        }))
    }

    render() {
        const {increase, star} = this.state
        const props = this.props
        let classNames = "list-group-item d-flex justify-content-between"
        classNames += increase ? ' increase' : ''
        classNames += star ? ' like' : ''

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onStar}>{props.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={this.onIncrease}>
                        <i className="fas fa-cookie"/>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                    onClick={props.onDelete}>
                        <i className="fas fa-trash"/>
                    </button>
                    <i className="fas fa-star"/>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
