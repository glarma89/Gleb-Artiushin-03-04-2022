import React from "react";
import { Button } from 'react-bootstrap'
import { useEffect, useReducer, createContext } from "react";
import { weatherReducer } from '../reducers/weatherReducer';



export const weatherContext = createContext();

const AddToFav = () => {
    const [weather, dispatch] = useReducer(weatherReducer, [], ()=>{
        const localData = localStorage.getItem('weather')
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(()=> {
        localStorage.setItem('weather', JSON.stringify(weather))
    }, [weather]);

    return (
        <Button value={{weather, dispatch}}>
            {weather}
        </Button>
    )
}

export default AddToFav