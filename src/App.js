import React, { useEffect, useState } from 'react';
import './App.scss';
import { Cards, Charts, CountryPicker} from '@/components'

import axios from 'axios'

function App() {
  const [data, set] = useState({})
  useEffect(() => {
     axios.get('https://covid19.mathdro.id/api').then(res => {
       console.log(res.data)
       set({...res.data})
     }).catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
        <Cards data={data} />
        <CountryPicker />
        <Charts />
    </div>
  );
}

export default App;
