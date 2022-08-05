import React, { useState, useEffect } from 'react'
import "./style.css"
import Display from './display'
const Weather = () => {
    const [city, setcity] = useState("noida")
    const [info, setinfo] = useState({})
    const fetchapi = async () => {
        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4b0286128bd8e3ce592b8bc812ce50d9`
            const api = await fetch(url)
            const data = await api.json()
            const { temp, pressure, humidity } = data.main
            const { main } = data.weather[0]
            const { name } = data;
            const { speed } = data.wind
            const { sunset } = data.sys
            const finalinfo = {
                temp,
                pressure,
                humidity,
                main,
                speed,
                sunset,
                name
            }
            setinfo(finalinfo)
            setcity("")
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchapi()
    }, [])
    return (
        <>

            <div className="searchbar">
                <input type="text" placeholder="Enter city name" className="inputbox" value={city} onChange={(event) => setcity(event.target.value)}></input>
                <button class="button-7" onClick={() => fetchapi()}>Search</button>
            </div>
            <Display weatherinfo={info} />
        </>
    )
}

export default Weather