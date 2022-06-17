import {useLocation,Navigate} from "react-router-dom";

const RequireAuth = ({auth = true, children}) => {
    const location = useLocation()

    if (!auth){
        return <Navigate to={'/login'}/>
    }

    return children;
}

export default RequireAuth