import Link from "next/link";


export default function Footer(){

    return(<div className="center">
        <div>
        Powered by
            <Link href="https://www.weatherapi.com/" title="Free Weather API">{" WeatherAPI.com"}</Link>

            </div> 
    </div>  )
}