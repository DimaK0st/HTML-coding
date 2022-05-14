import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = (props) => {
    return (
        <ul>
            {props.data.map((item) => {
                return <EmployeesListItem
                    {...item}
                    key={item.id}
                    onDelete={() => props.onDelete(item.id)}
                    onToggleProp={(e) => props.onToggleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                />
            })}
        </ul>
    )
}

export default EmployeesList
