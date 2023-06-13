
import { Outlet } from 'react-router-dom';
import { LoginUser } from './LoginUser';

const useAuth =()=>{

    var id = localStorage.getItem("uid")
    if(id == undefined)
    {
        return false
    }
    return true;
}

const ProtectedRoutes = () => {

    const flag= useAuth();
    console.log('local storage id==',flag)
   if(flag== true){
    return <Outlet/>
   }
   return <LoginUser/>
}

export default ProtectedRoutes; 
