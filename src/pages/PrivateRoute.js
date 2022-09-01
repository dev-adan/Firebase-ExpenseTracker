import { useAuthContext } from '../hooks/useAuthContext'
import { Navigate} from 'react-router-dom';

const PrivateRoute = (props,{children}) => {
    const {user} = useAuthContext();
   
  if(!user){
     return <Navigate to={props.redirect}/>
  }

  return children
}

export default PrivateRoute