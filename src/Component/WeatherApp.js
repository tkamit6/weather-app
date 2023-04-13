import React , {useState, useEffect} from 'react'
import WeatherCard from './WeatherCard';
import '../App.css';


const WeatherApp = () => {
    const [searchValue, setSearchValue] = useState("delhi");
    const [tempInfo, setTempInfo] = useState('');

    let getWeatherInfo = async () =>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=fec11b7e373cd695907e83fc5c116927`;
            
            const res = await fetch(url);
            const data = await res.json();

            // console.log(data)
            const {temp, humidity, pressure} = data.main;
            const weatherMood = data.weather[0].main;
            const weatherIconArr = data.weather[0].icon;
            const sliceWeatherIcon  = weatherIconArr.slice(0,-1);
            const weatherIcon = `${sliceWeatherIcon}d`;

            const cityName = data.name;
            const WindSpeed = data.wind.speed;
            const country = data.sys.country;

            var NewWeatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                cityName,
                WindSpeed,
                country,
                weatherIcon
            };
            setTempInfo(NewWeatherInfo);
            // console.log(setTempInfo);
        }catch(error){
            console.log(error);
        }

    };
        useEffect(() => {
            getWeatherInfo();
        },[])
    
    return (
    <>
    <section>
    <div className="weather">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 ">
                <div className="search-bar justify-content-center text-center d-flex">
                    <input type='search' id='searchTemp' onChange={(e)=> setSearchValue(e.target.value)} value={searchValue} autoFocus className='form-control w-50' placeholder='Tokyo' />
                    <a type='submit' className='btn btn-primary'  onClick={getWeatherInfo}> Search </a>
                </div>
                </div>
            </div>
        </div>
       
    </div>
    </section>
     <WeatherCard tempInfo={tempInfo}/>
    </>
  )
}

export default WeatherApp