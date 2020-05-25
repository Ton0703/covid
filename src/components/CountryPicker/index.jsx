import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './index.scss'

function CountryPicker({handleCountryChange}) {
    const [Countries, set] = useState([])
    useEffect(() => {
        axios.get('https://covid19.mathdro.id/api/countries').then(res => {
            console.log(res.data)
            set(res.data.countries.map(({name}) => name ))
        })
    }, [])
    return (
        <div className='country'>
            <h4>选择地区:</h4>
            <select name="country"  onChange={e => handleCountryChange(e.target.value)}>
                <option>global</option>
                {Countries.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CountryPicker
