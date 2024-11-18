import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    console.log(children)

    const {user} = useContext(AuthContext)
    console.log(user)
    const navigate = useNavigate()

    if(!user){
        useEffect(() => {
            navigate("/login");
            return
        }, [])
    }

    return {children}
};

export default PrivateRoute;