import { useState } from "react"

export function EventDemo(){

    
    function handleClick(event,...params){
        var [id, name, cities] = params;
        console.log(`
                Id : ${id}\n
                Name: ${name}\n
                Cities: ${cities}\n
                Button Id : ${event.target.id}
            `);
    }

    return(
        <div className="container-fluid">
            <h3>Data Binding</h3>
            <button id="btnInsert" onClick={(event)=> handleClick(event,1, 'TV', ['Delhi','Hyd'])} name="Insert">Insert</button>
        </div>
    )
}