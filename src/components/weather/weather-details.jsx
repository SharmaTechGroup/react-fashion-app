import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";



export function WeatherDetails(props){

    const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=1318ca6725c69160d346c41fc0612596&units=metric`;
    const [weatherData, setWeatherData] = useState({name:null, main:{temp:0, humidity:0} , weather:[{description:''}]});
    const [now] = useState(new Date());

    function LoadWeatherData(){
        axios.get(api_url).then(response=>{
            setWeatherData(response.data);
        })
    }
    useEffect(()=>{
        LoadWeatherData();
    },[props])

    return(
        <div className="container-fluid bg-dark text-white p-3 rounded rounded-4">
             
             <div>
                <span className="bi bi-geo fs-3 fw-bold"> {weatherData.name} </span>
                <br/>
                {moment(now).format('dddd DD , MMMM YYYY')}
             </div>
             <div className="mt-4">
                <span className="fs-1 fw-bold"> {weatherData.main.temp} &deg;C </span>
                <br />
                <span>[{weatherData.weather[0].description.toUpperCase()}]</span>
                <span> {weatherData.main.humidity} <span className="bi bi-thermometer"></span> Humidity </span>
             </div>
        </div>
    )
}