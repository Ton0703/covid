import React, { useEffect, useState } from 'react';
import './App.scss';
import { Cards, Charts, CountryPicker} from '@/components'

import axios from 'axios'

function App() {
  const [data, set] = useState({}) 
  const [country, setCountry] = useState('')

  const handleCountryChange = (country) => {
    country === 'global' 
    ? setCountry('')
    : setCountry(country)
  }
  useEffect(() => {
    let url = country !== '' ? `https://covid19.mathdro.id/api/countries/${country}` : 'https://covid19.mathdro.id/api'
     axios.get(url).then(res => {
       set({...res.data})
     }).catch(err => console.log(err))
  }, [country])
  return (
    <div className="App">
        <div className='title'>
          <img src='/image.png' alt='' />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Charts data={data} country={country}/>
    </div>
  );
}

export default App;
