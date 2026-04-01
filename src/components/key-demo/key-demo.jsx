import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){

    const [users, setUsers] = useState([{user_id:null}]);
    const [msg, setMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [pwdErrorClass, setPwdErrorClass] = useState('');
    const [progressWidth, setProgressWidth] = useState({width:''});
    const [progressClass, setProgressClass] = useState('');

    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    function VerifyUser(e){
        for(var user of users){
            if(user.user_id===e.target.value){
                setMsg('User Id Taken - Try Another');
                setErrorClass('text-danger');
                break;
            } else {
                setMsg('User Id Available');
                setErrorClass('text-success');
            }
        }
    }

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)){
            setPwdMsg('Strong Password');
            setPwdErrorClass('text-success');
            setProgressWidth({width:'100%'});
            setProgressClass('bg-success');
        } else {
            if(e.target.value.length<4){
                setPwdMsg('Poor Password - Min 4 chars required');
                setPwdErrorClass('text-danger');
                setProgressWidth({width:'30%'})
                setProgressClass('bg-danger');
            } else {
                setPwdMsg('Weak Password - At least one uppercase letter required');
                setPwdErrorClass('text-warning');
                setProgressWidth({width:'70%'});
                setProgressClass('bg-warning');
            }
        }
    }

    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl className="w-25">
                <dt>User Id</dt>
                <dd>
                    <input onKeyUp={VerifyUser} className="form-control" type="text" />
                </dd>
                <dd className={errorClass}>
                    {msg}
                </dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyUp={VerifyPassword} className="form-control" /></dd>
                <dd className="progress">
                    <div style={progressWidth} className={`progress-bar ${progressClass} progress-bar-animated progress-bar-striped`}></div>
                </dd>
                <dd style={{fontSize:'10px'}} className={pwdErrorClass}>{pwdMsg}</dd>
            </dl>
        </div>
    )
}