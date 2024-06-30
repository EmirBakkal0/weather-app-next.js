"use client"

import React from 'react'
import { useState } from 'react'
import processWeather from './page' 
import Link from 'next/link'
import "@/styles/global.css"

function CityBar() {

  const [city,setCity] = useState("")

  const weatherData =processWeather(city);

  const handleCity = (event) => {
    setCity(event.target.value)
  }
  return (
    <div className='flex justify-center'>
      {/* <label htmlFor="">Enter City:</label> */}
      <input type="text" onChange={handleCity} value={city} placeholder='Enter location..'/>

      <Link href={city}  className='css-button-shadow-border-sliding--blue'>Check weather </Link>

       <div>
        
       </div>

    </div>
  )
}

export default CityBar