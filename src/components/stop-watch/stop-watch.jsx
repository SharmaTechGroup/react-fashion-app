import { useRef, useState } from "react"


export function StopWatch(){


    const [hrs, setHrs] = useState(0);
    const [min, setMin] = useState(0);
    const [sec, setSec] = useState(0);
    const [ms, setMs] = useState(0);

    let thread = useRef(null);

        var milliSeconds = 0;
        var seconds = 0;
        var minutes = 0;

    function StartWatch(){
       
        milliSeconds++;
        setMs(milliSeconds);
        if(milliSeconds===999){
            seconds++;
            setSec(seconds);
            milliSeconds = 0;
            if(seconds===59){
                minutes++;
                setMin(minutes);
                seconds=0;
            }
        }
    }

    function handleStartClick(){
        thread.current = setInterval(StartWatch,1);
    }

    function handleStopClick(){
        clearInterval(thread.current);
        setHrs(0);
        setMin(0);
        setSec(0);
        setMs(0);
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
           <div>
             <div className="row mt-5 p-4  border border-1" style={{width:'500px'}}>
                <div className="col">
                    <span>{hrs}</span>
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    <span>{min}</span>
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    <span>{sec}</span>
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    <span>{ms}</span>
                </div>
            </div>
            <div className="mt-4">
                <button onClick={handleStartClick} className="btn btn-primary me-3">Start</button>
                <button onClick={handleStopClick} className="btn btn-secondary">Stop</button>
            </div>
           </div>
        </div>
    )
}