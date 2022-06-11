import {useState} from "react";
import Login from "../../auth/Login";
import Register from "../../auth/Register";

const RightSide = (props) => {
    console.log('RightSide', props)

    return(
        <>
            <Login typeForm={props.typeForm}/>
        </>
    )
}

export default RightSide