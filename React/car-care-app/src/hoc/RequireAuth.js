import {useLocation, Navigate} from "react-router-dom";

const RequireAuth = ({auth = true, children}) => {

    if (!auth) {
        return <Navigate to={'/login'}/>
    }

    return children;
}

export default RequireAuth