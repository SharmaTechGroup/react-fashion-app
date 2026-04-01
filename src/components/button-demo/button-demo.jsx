import { useState } from "react"


export function ButtonDemo(){

    const [code, setCode] = useState('');

    function handleCodeChange(e){
        setCode(e.target.value);
    }


    function handleBlur(){
        setCode(code.toUpperCase());
    }

    return(
        <div  className="container-fluid" style={{height:'100vh'}}>
             <h2>State</h2>
             <dl>
                <dt>Bank IFSC Code</dt>
                <dd>
                    <input type="text" value={code} onBlur={handleBlur} onChange={handleCodeChange} />
                </dd>
             </dl>
        </div>
    )
}