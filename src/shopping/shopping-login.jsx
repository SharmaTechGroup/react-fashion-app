import { useFormik } from "formik"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export function ShoppingLogin(){

    let navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['username']);

    const formik = useFormik({
        initialValues: {
            UserName:'',
            Password:''
        },
        onSubmit: (user)=>{
            if(user.Password==="admin"){
                setCookie('username', user.UserName);
                navigate('/home');
            } else {
                alert("Invalid Password - Try Again");
            }
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="Password" /></dd>
                </dl>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}