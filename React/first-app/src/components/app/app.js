import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Ivan', salary: 324, increase: false, id: 1},
                {name: 'Stepan', salary: 4612, increase: false, id: 2},
                {name: 'Akakiy', salary: 684, increase: true, id: 3},
                {name: 'Bonaqua', salary: 6845, increase: false, id: 4},
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id !== id)
            }
        })
    }

    render() {

        return (
            <div className={'app'}>
                <AppInfo/>

                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                <EmployeesList data={this.state.data}
                               onDelete={this.deleteItem}/>
                <EmployeesAddForm/>
            </div>
        )
    }
}

export default App
