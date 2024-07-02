import React from 'react'
import Image from 'next/image';

// async function getWeather(city) {
//     try{
//         const APIKEY = process.env.WEATHER_API_KEY
//         const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
        

//     }
//     catch(error){
        
//     }
    

// }

async function processWeather(city) {
    try{
        const APIKEY = process.env.WEATHER_API_KEY
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${city}&aqi=no`)
        const weather = await res.json();
        
        const dict = {
            name: weather.location.name,
            country: weather.location.country,
            temp_c: weather.current.temp_c,
            time: weather.current.last_updated,
            condition: weather.current.condition
        }
    
        return dict
    }
    
    catch(error){
        console.log(error)
    }
}



async function CityWeather({ params }) {

    
    const weatherInfo  = await processWeather(params.city)
    if(weatherInfo !== undefined){
        
        const {name,country,temp_c,time,condition} = weatherInfo;
        const iconLink="http:"+condition.icon
    
        return (
            <div className='center weather'>
            
                <div className=''>
                    <h4>{time}</h4>
                    <h3>{name+", "+country}</h3>
                    <div style={{flexDirection:"row"}}>
                        <Image src={iconLink} alt="weather icon" width={64} height={64} />
                        <h2>{`${temp_c} C`  }</h2>
                        <h4>{condition.text}</h4>
                    </div>
    
    
                </div>
            
            
            </div>
        )
    
    }
    else {
        return (
            <h2 className='center' > Try searching different city.. </h2>
        )
    }


}

export default CityWeather