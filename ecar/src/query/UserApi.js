import React from 'react'
import { useFetchUser } from './UserService'

export const UserApi = () => {
  
    const {data,error,isLoading} = useFetchUser()

    useEffect(() => {
      
        console.log("data...",data)
        console.log("isLoading...",isLoading)
        console.log("error...",error)
    
      
    }, [isLoading])

    return (

        <div>
            <button onClick={()=>refetch()}>Fetch Data</button>

        </div>

    )

}


