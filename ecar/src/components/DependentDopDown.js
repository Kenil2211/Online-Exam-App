import React, { useState } from 'react'

export const DependentDopDown = () => {

    const [country1, setcountry1] = useState('')

    const country = [
        {
            name: 'India',
            value: 'IN',
            city: [
                'Delhi',
                'Gujarat',
            ]
        },
        {
            name: 'USA',
            value: 'US',
            city: [
                'Allen',
                'NYC',
                'LA'
            ]
        }
    ]

    const Optionhandler = (cname) => {
        setcountry1(cname)
        console.log('cname', cname)
    }

    return (
        <div>
            DependentDopDown
            <select onChange={(e) => { Optionhandler(e.target.value) }}>
                <option value=''>select</option>
                {
                    country?.map((c) => {
                        return (
                            <option name={c.name} value={c.name} > {c.name} </option>
                        )
                    })
                }
            </select>
            {
                country1 ? <>
                    <br />City--<select>
                    <option value=''>select</option>
                        {
                            country?.map((c) => {
                                if (c.name === country1) {
                                    return (

                                        c.city.map((city) => {
                                            return (
                                                <option value={city}>{city}</option>
                                            )
                                        })
                                    )
                                }
                            })
                        }

                    </select> </> : ""
            }
        </div>
    )
}
