import { useEffect, useState } from "react"


export function IntervalDemo(){
    const [time, setTime] = useState(new Date())

    function Timer(){
        setTime(new Date());
    }

    useEffect(()=>{
        setInterval(Timer,1000);
    },[])

    return(
        <div className="container-fluid text-center">
            <h2>{time.toLocaleTimeString()}</h2>
        </div>
    )
}