import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

export const UserDashboard = () => {

    const [userList, setuserList] = useState([])
    // const [loader, setloader] = useState(true)



    const getAllUser = () => {
        axios.get('http://localhost:3001/user/user').then((res) => {
            // setloader(false)
            setuserList(res.data)
        })
            .catch((err) => { })
    }

    useEffect(() => {

        getAllUser()

    }, [])


    const deleteUser = (uid) => {
        console.log('delete --->', uid)
    }

    return (
        <div>
            UserDashboard
            

            <table>

                {
                    userList?.map((user) => {
                        return (
                            <tr>
                                <td>
                                    {user.name}
                                </td>
                                <td>
                                    <button onClick={() => {
                                        deleteUser(user._id)
                                    }}>
                                        DELETE
                                    </button>
                                </td>
                            </tr>
                        )

                    })
                }

            </table>
        </div>
    )
}
