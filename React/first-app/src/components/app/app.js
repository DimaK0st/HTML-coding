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
                {name: 'Ivan', salary: 324, increase: false, rise: false, id: 1},
                {name: 'Stepan', salary: 4612, increase: false, rise: true, id: 2},
                {name: 'Akakiy', salary: 684, increase: true, rise: false, id: 3},
                {name: 'Bonaqua', salary: 6845, increase: false, rise: false, id: 4},
            ],
            count: 4,
            term: '',
            filter: 'all',
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((item) => item.id !== id)
            }
        })
    }

    addEmployees = (name, salary) => {
        let nextId = this.state.count
        nextId += 1
        this.setState((state) => {
            return {
                data: [
                    ...state.data,
                    {
                        name: name, salary: salary, id: nextId, increase: false, rise: false
                    }
                ],
                count: nextId
            }
        })
    }

    onToggleProp = (id, prop) => {
        //v0.0
        // this.setState(({data})=>{
        // const index = data.findIndex(elem =>elem.id ===id)
        //
        // const old = data[index]
        // const newItem= {...old, increase: !old.increase}
        //
        // return{
        //     data: [...data.slice(0, index), newItem, ...data.slice(index+1)]
        // }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        // this.setState({term: term})
        // ==
        this.setState({term})
    }

    filterPost = (items, filter) => {
        console.log(filter)
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render() {
        const employees = this.state.data.length
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(this.state.data, this.state.term), this.state.filter)

        return (
            <div className={'app'}>
                <AppInfo employees={employees} increased={increased}/>

                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={this.state.filter} onFilterSelect={this.onFilterSelect}/>
                </div>
                <EmployeesList data={visibleData}
                               onDelete={this.deleteItem}
                               onToggleProp={this.onToggleProp}

                />
                <EmployeesAddForm onPost={this.addEmployees}/>
            </div>
        )
    }
}

export default App
