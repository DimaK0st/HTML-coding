import {TextField} from "@mui/material";
import {useState} from "react";
import './AddDistance.scss'
import SparesHelper from "../../services/SparesHelper";

const AddDistance = (props) => {
    const [option, setOption] = useState('')
    const [err, setErr] = useState(false)
    const sparesHelper = SparesHelper()

    const saveDistance = () => {
        if (option.length>1){
            sparesHelper.addOption(option)
            setOption('')
        }
    }

    return (
        <>
            <TextField className={err ? 'border distance' : 'distance'}
                       value={option}
                       size="small" label="Option" type="input"
                       variant="outlined" required onChange={(e) => setOption(e.target.value)}/>
            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={() => props.showNewOption(false)}>Cancel</button>
                <button className={'submit'} onClick={() => saveDistance()}>Submit</button>
            </div>
        </>
    )
}

export default AddDistance