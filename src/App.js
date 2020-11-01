import React, { useState } from 'react'
import Header from './Header'
import Main from './Main'
import Nav from './Nav'
import requests from './requests.js'
import Results from './Results'
import './App.css'
function App() {
  const [selectedOption, setSelectedOption] = useState(`business`)
  const [country , setCountry] = useState(`in`)
  const [queryy , setqueryy] = useState('bitcoin')

  return (
    <div>
    <Header />
      <Nav setSelectedOption={setSelectedOption} setCountry={setCountry} setqueryy={setqueryy}/>
      <Results selectedOption={selectedOption} country={country}  queryy={queryy}/>

    </div>
  )
}

export default App
