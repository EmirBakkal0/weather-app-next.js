import React from 'react'
import Image from 'next/image';

async function getWeather(city) {
    const APIKEY = process.env.WEATHER_API_KEY
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
    return res.json();
}

async function processWeather(city) {
    const weather = await getWeather(city)

    const dict = {
        name: weather.location.name,
        country: weather.location.country,
        temp_c: weather.current.temp_c,
        time: weather.current.last_updated,
        condition: weather.current.condition
    }

    return dict
}


async function CityWeather({ params }) {

    const weatherInfo  = await processWeather(params.city)

    const {name,country,temp_c,time,condition} = weatherInfo;

    return (
        <div>
        
            <div>
                <h3>{name+", "+country}</h3>
                <h4>{time}</h4>
                <h2>{`${temp_c} C`  }</h2>
                <div>
                    <h2>{condition.text}</h2>
                    <img src={"http:"+condition.icon} alt="weather icon" width={100} height={100} />
                </div>


            </div>
        
        
        </div>
    )
}

export default CityWeather