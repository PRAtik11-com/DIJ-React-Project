import { Navigate } from "react-router"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Firebase/Allfirebaseauth";


const Private = ({children}) => {
  
    const [user] = useAuthState(auth)
    if (!user) {
      return <Navigate to={'/Login'}></Navigate>  
    }
    else{
        return children
    }
  
}

export default Private
