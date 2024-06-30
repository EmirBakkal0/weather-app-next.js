"use client"

import React from 'react'
import { useState } from 'react'
import processWeather from './page' 
import Link from 'next/link'

function CityBar() {

  const [city,setCity] = useState("")

  const weatherData =processWeather(city);

  const handleCity = (event) => {
    setCity(event.target.value)
  }
  return (
    <div>
      {/* <label htmlFor="">Enter City:</label> */}
      <input type="text" onChange={handleCity} value={city} placeholder='Enter location..'/>

      <Link href={city} >Check weather </Link>

       <div>
        
       </div>

    </div>
  )
}

export default CityBar