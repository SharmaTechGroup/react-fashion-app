import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { TutorialHome } from "./tutorial-home";
import { JavaTutorial } from "./java-tutorial";
import { ReactTutorial } from "./react-tutorial";
import { WeatherIndex } from "../components/weather/weather-index";


export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
                <header className="bg-dark text-white p-2 text-center">
                    <span className="fs-2 fw-bold">Tutorial Index</span>
                </header>
                <nav className="my-4 text-center">
                    <span className="mx-4"> <Link to="/">Home</Link> </span>
                    <span className="mx-4"> <Link to="java">Java</Link> </span>
                    <span className="mx-4"> <Link to="react">React</Link> </span>
                    <span className="mx-4"> <Link to="weather">Weather</Link> </span>
                </nav>
                <section>
                    <Routes>
                        <Route path="/" element={<TutorialHome />} />
                        <Route path="java" element={<JavaTutorial />} />
                        <Route path="react/:topic/:subtopic" element={<ReactTutorial />} />
                        <Route path="weather" element={<WeatherIndex />} />
                        <Route path="*" element={<div className="text-danger"><h3>Not Found</h3><p>Page you requested not found</p></div>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    )
}