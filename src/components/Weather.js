import React from "react";
import {useSelector} from "react-redux";


const Weather = () =>
{
    const {weatherInfo, message} = useSelector(state => state)
    return(
        <div className={'infoWeath'}>
            {!message &&
            <div>
                <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                <p>Temperature: {weatherInfo.temp}</p>
                <p>Pressure: {weatherInfo.pressure}</p>
                <p>Sunset: {new Date(weatherInfo.sunset * 1000).toTimeString()}</p>
            </div>
            }
            <p>{message}</p>
        </div>
    )
}

export default Weather
