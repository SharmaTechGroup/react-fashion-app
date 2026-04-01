import { useState } from "react";

export function ChildComponent({onChildClick}){


    function handleButtonClick(){
        onChildClick({title:'Hello from child', cities:['delhi','hyd']});
    }

    return(
        <div className="bg-danger p-4 text-white">
            <h4>Child Component</h4>
            <button onClick={handleButtonClick} className="btn btn-warning">Send</button>
        </div>
    )
}


export function ContextDemo(){

    const [msg, setMsg] = useState('wating for data from child');

    function handleChildClick(e){
        setMsg(e.title);
        console.log(e.cities);
    }

    return(
        <div className="container-fluid p-4 bg-dark text-white">
            <h2>Parent Component - {msg}</h2>
            <ChildComponent onChildClick={handleChildClick} />
        </div>
    )
}