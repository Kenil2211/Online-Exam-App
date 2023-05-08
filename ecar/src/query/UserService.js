import { useQuery } from "react-query"
import axios from "axios"


const fetchUserData = () =>{

   return axios.get('http://localhost:3000/user/user')
}

export const useFetchUser =()=>{

    return useQuery("userlist",fetchUserData,{
        retry:10
    })
}