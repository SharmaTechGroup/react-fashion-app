import { useRef, useState } from "react"


export function DebounceDemo(){

    const [volume, setVolume] = useState('Increase Volume');

    let thread = useRef(null);

    function Level1(){
        setVolume('Volume Increased : 30%');
    }
    function Level2(){
        setVolume('Volume Increased : 70%');
    }
    function Level3(){
        setVolume('Volume Full');
    }

    function handleClick(){
        setTimeout(Level1, 4000);
        thread.current = setTimeout(Level2,8000);
        setTimeout(Level3,14000);
    }
    function CancelClick(){
        alert('Canceled Level-2');
        clearTimeout(thread.current);
    }

    return(
        <div className="container-fluid">
            <div className="mt-4">
                <button onClick={handleClick} className="bi bi-volume-up-fill btn btn-primary"></button>
                <button onClick={CancelClick} className="btn btn-danger">Cancel Level-2</button>
                <p>{volume}</p>
            </div>
        </div>
    )
}