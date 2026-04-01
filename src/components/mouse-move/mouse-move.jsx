import { useState } from "react"

export function MouseMove(){


    const [styleObject, setStyleObject] = useState({position:'fixed', top:'', left:''});

    function handleMouseMove(e){
        setStyleObject({
            position:'fixed',
            top: e.clientY + 'px',
            left: e.clientX + 'px'
        })
    }

    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <p>Move Mouse pointer to test</p>
            </div>
            <img  src='flag.gif' style={styleObject} width={50} height={50} />
        </div>
    )
}