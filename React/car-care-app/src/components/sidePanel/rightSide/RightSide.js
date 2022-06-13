import Login from "../../auth/Login";

const RightSide = (props) => {
    console.log('RightSide', props)

    return(
        <>
            <Login typeForm={props.typeForm}/>
        </>
    )
}

export default RightSide