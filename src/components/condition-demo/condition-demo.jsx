import { useEffect, useState } from "react"


export function ConditionDemo(){



    const [userName, setUserName] = useState('');

    function handleNameChange(e){
        setUserName(e.target.value);
    }
    function handleSigninClick(){
        sessionStorage.setItem('username', userName);
        location.reload();
    }
    function handleSignoutClick(){
        sessionStorage.removeItem('username');
        location.reload();
    }

    return(
        <div className="container-fluid">
            <header className="p-3 border border-1 d-flex justify-content-between">
                <span className="fs-4 fw-bold">Amazon</span>
                <div>
                   {
                    (sessionStorage.getItem('username')===null) ?
                    <div className="input-group">
                     <input onChange={handleNameChange} type="text" placeholder="User Name" />
                    <button onClick={handleSigninClick} className="btn btn-primary">Sign In</button>
                   </div>
                     :
                      <div>
                        <span className="bi bi-person-fill"> {sessionStorage.getItem('username')}</span> <button onClick={handleSignoutClick} className="btn btn-danger">Signout</button>
                      </div>
                   }
                </div>
            </header>
        </div>
    )
}