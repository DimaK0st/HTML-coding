import EmployeesListItem from "../employees-list-item/employees-list-item";
import './employees-list.css'

const EmployeesList = (props) => {
    return (
        <ul>
            {props.data.map((item)=>{
                return <EmployeesListItem name={item.name} salary={item.salary} increase={item.increase} key={item.id} onDelete={()=>props.onDelete(item.id)}/>
            })}
        </ul>
    )
}

export default EmployeesList
