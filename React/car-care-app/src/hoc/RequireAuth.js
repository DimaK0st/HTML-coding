import {useLocation,Navigate} from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = true
    
    if (!auth){
        return <Navigate to={'/login'}/>
    }

    return children;
}

export default RequireAuth