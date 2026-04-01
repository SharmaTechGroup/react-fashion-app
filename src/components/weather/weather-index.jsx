import { useState } from "react"
import { WeatherDetails } from "./weather-details"

export function WeatherIndex(){

    const [cityName, setCityName] = useState('Delhi');
    const [searchCity, setSearchCity] = useState('Delhi');

    function handleCityChange(e){
        setCityName(e.target.value);
    }
    function handleSearchClick(){
        setSearchCity(cityName);
    }

    return(
        <div style={{height:'100vh'}} className="container-fluid bg-secondary d-flex justify-content-center">
            <div style={{height:'400px'}} className="bg-light shadow w-50 rounded rounded-5 border border-1 p-4 mt-4">
                <header className="d-flex p-1 justify-content-between align-items-center">
                <div className="fw-bold fs-4 bi bi-cloud-fill"> Weather App</div>
                <div>
                    <div className="input-group">
                        <input type="text" onChange={handleCityChange} placeholder="Your city name" className="form-control" />
                        <button onClick={handleSearchClick} className="btn btn-dark bi bi-search"></button>
                    </div>
                </div>
                <div>
                    <span className="bi bi-gear-fill"></span>
                </div>
               </header>
               <section className="mt-3">
                   <WeatherDetails city={searchCity} />
               </section>
            </div>
        </div>
    )
}