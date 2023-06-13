import React from 'react'
import { useLocation } from 'react-router-dom'

export const Settings = () => {

    const location = useLocation()
    const { state } = location

    return (
        <div>
            
            <h1>Settings</h1>
            
            {/* <p>Received message: {state.data}</p> */}

        </div>
    )
}
