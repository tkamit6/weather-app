import React, { useEffect } from 'react'

const WeatherCard = ({tempInfo}) => {

    return (
    <>
       <div className="main-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="weatherIcon mb-1">
                        <i className="wi wi-night-sleet"></i>
                            <img src={`https://openweathermap.org/img/wn/${tempInfo.weatherIcon}@2x.png`} alt="icon" draggable="false" />
                        </div>
                    </div>
                </div>
                <div className="weatherInfo mb-3">
                    <div className="row">
                        <div className="col-lg-4 col-12">
                            <div className="weatherDeg"><span> {`${tempInfo.temp}`} &deg; C</span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="weatherDes">
                                <span>{`${tempInfo.cityName}, ${tempInfo.country}`} </span>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="weatherDay">
                            <span>{new Date().toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="weatherExtraInfo">
                    <div className="row">
                        <div className="col-lg-3 col-3">
                        {/* <i className="fa-solid fa-cloud"></i> */}
                        <p>Weather is <br /> <span className='weathermood'> {` ${tempInfo.weatherMood}`}</span></p>
                        </div>
                        <div className="col-lg-3 col-3">
                        <i className="fa-solid fa-droplet"></i>
                        <p>{`${tempInfo.humidity}`}<br /> Humidity</p>
                        </div>
                        <div className="col-lg-3 col-3">
                        <i className="fa-brands fa-cloudscale"></i>
                        <p>{`${tempInfo.pressure}`} <br /> (Pascal - Pressure)</p>
                        </div>
                        <div className="col-lg-3 col-3">
                        <i className="fa-solid fa-wind"></i>
                        <p>{`${tempInfo.WindSpeed}`}: km/h <br />  Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default WeatherCard