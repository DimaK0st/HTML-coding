import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = () => {
    return (
        <ul>
            <EmployeesListItem name='Stepan Kj.' salary='800' />
            <EmployeesListItem name='Ivan G.' salary='5000' />
            <EmployeesListItem name='Rost Ik.' salary='3000' />
        </ul>
    )
}

export default EmployeesList
