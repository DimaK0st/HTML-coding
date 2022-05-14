import './employees-list-item.css'

const EmployeesListItem = (props) => {

        let classNames = "list-group-item d-flex justify-content-between"
        classNames += props.increase ? ' increase' : ''
        classNames += props.rise ? ' like' : ''

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={props.onToggleProp} data-toggle={'rise'}>{props.name}</span>
                <input type="text" className="list-group-item-input" defaultValue={props.salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            className="btn-cookie btn-sm "
                            onClick={props.onToggleProp} data-toggle={'increase'}>
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

export default EmployeesListItem;
