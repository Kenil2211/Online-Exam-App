import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {

    const navigate = useNavigate()

    const handleClick=()=>{
        // alert('jii')
        navigate('/setting' , {
            state:{
                data:"hello"
            }
        })
    }

  return (
    <div>
        Profile
        <div>
            <Button onClick={()=>{handleClick()}}>kenil</Button>
        </div>
    </div>
  )
}
