import {TextField} from "@mui/material";
import {useState} from "react";
import './AddDistance.scss'

const AddDistance = (props) => {
    const [distance, setDistance] = useState(props.distance)

    const saveDistance = () => {
        props.setDistance(distance)
    }

    return (
        <>
            <TextField className={'distance'}
                       size="small" label="Start km" type="number"
                       variant="outlined" required onChange={(e) => setDistance(Number(e.target.value))}/>
            <div className={'button-wrapper'}>
                <button className={'cancel'} onClick={() => props.showNewDistance(false)}>Cancel</button>
                <button className={'submit'} onClick={() => saveDistance()}>Submit</button>
            </div>
        </>
    )
}

export default AddDistance