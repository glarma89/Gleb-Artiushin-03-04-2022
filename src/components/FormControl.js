import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {getWeatherAction} from "../actions/weatherActions";
import { Button } from "react-bootstrap";
import AddToFav from "./AddToFav";

const FormControl = () =>
{
    const [city, setCity] = useState('')
    const dispatch = useDispatch()

    const handleChangeCity = event =>
    {
        setCity(event.target.value)
    }

    const handleClick = () =>
    {
        dispatch(getWeatherAction(city))
        setCity('')
    }
    return(
        <div>
            <input typeof={'text'} placeholder={'City'}
                   onChange={handleChangeCity} value={city}/>
            <button onClick={handleClick}>Get weather</button>
            <Button onClick={handleClick} city={city} element={<AddToFav/>}>Add to Favorites</Button>
            
        </div>
    )
}

export default FormControl
