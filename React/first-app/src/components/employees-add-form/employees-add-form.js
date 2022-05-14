import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: 0
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitCheck = (e, name, salary) => {
        e.preventDefault();
        if (name!=='' && !isNaN(salary)) {
            this.props.onPost(name, salary)
            this.setState({
                name: '',
                salary: 0
            })
        }
    }

    render() {

        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(e) => this.onSubmitCheck(e, name, salary)}
                    className="add-form d-flex">
                    <input type="text"
                           className="form-control new-post-label"
                           name='name'
                           value={name}
                           onChange={this.onValueChange}
                           placeholder="Как его зовут?"/>
                    <input type="number"
                           className="form-control new-post-label"
                           name='salary'
                           value={salary}
                           onChange={this.onValueChange}
                           placeholder="З/П в $?"/>

                    <button type="submit"
                            className="btn btn-outline-light"
                    >Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
