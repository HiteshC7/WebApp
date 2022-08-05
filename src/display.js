import React, { useState, useEffect } from 'react'

const Display = ({ weatherinfo }) => {
    const [weathermood, setweathermood] = useState("images/sunny.png")
    const {
        temp,
        pressure,
        humidity,
        main,
        speed,
        sunset,
        name
    } = weatherinfo
    const sec = sunset
    const msec = new Date(sec * 1000)
    const ftime = `${msec.getHours()}:${msec.getMinutes()}`
    useEffect(() => {
            switch (main) {
                case "Clouds":
                    setweathermood("images/clouds.png")
                    break;
                case "Haze":
                    setweathermood("images/haze.webp")
                    break;
                case "Clear":
                    setweathermood("images/sunny.png")
                    break;
                case "Rain":
                    setweathermood("images/rain.png")
                    break;
                    case "Mist":
                    setweathermood("images/mist.webp")
                    break;

                default:
                    setweathermood("images/sunny.png")
                    break;
            }

    }, [main])

    return (
        <>
            <div className="logo">
                <img src={weathermood} width="200px" alt="weather"></img>
            </div>
            <div className='temp'>
                <span className='tempnum'>{temp}&deg;</span>
                <span className='city'>{name}</span>
            </div>
            <div class="row">
                <div class="column left" >
                    <i className="wi wi-sunset"></i>
                    <h3>Sunset</h3>
                    <h2>{ftime} PM</h2>
                </div>
                <div class="column middle-one" >
                    <i className="wi wi-barometer"></i>
                    <h3>Pressure</h3>
                    <h2>{pressure}</h2>
                </div>
                <div class="column middle-two" >
                    <i className="wi wi-humidity"></i>
                    <h3>Humidity</h3>
                    <h2>{humidity}</h2>
                </div>
                <div class="column right" >
                    <i className="wi wi-strong-wind"></i>
                    <h3>Wind</h3>
                    <h2>{speed}</h2>
                </div>
            </div>
        </>
    )
}

export default Display