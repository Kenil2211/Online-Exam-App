
import { Outlet } from 'react-router-dom';
import { LoginUser } from './LoginUser';

const Auth =()=>{

    var id = localStorage.getItem("uid")?true:false
    return id;
}

const ProtectedRoutes = () => {

    const flag= Auth();
    console.log('local storage id==',flag)
    return (
        flag?<Outlet/>:<LoginUser/>
    )
}

export default ProtectedRoutes; 
