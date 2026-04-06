import axios from "axios";
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";



export default function ShoppingHome(){

    const [categories, setCategories] = useState([{CategoryId:0, Name:null}]);
    const [cookies, setCookie, removeCookie] = useCookies(['username']);
    let navigate = useNavigate();

    function LoadCategories(){
       axios.get(`http://127.0.0.1:3000/categories`)
       .then(response=>{
        setCategories(response.data);
       })
    }

    useEffect(()=>{
        if(cookies['username']) {
             LoadCategories();
        } else {
            navigate('/login');
        }
    },[cookies])

    function handleSignout(){
       removeCookie('username');
       navigate('/login');
    }

    return(
        <div className="container-fluid">
            <div className="mt-3 d-flex justify-content-between p-2 border border-1">
               <span className="fw-bold">{cookies['username']} - Dashboard</span>
               <button onClick={handleSignout} className="btn btn-link">Signout</button>
            </div>
            <ul className="list-group w-25 mt-3">
              {
                categories.map(category=>
                    <li key={category.CategoryId} className="list-group-item list-group-item-primary my-2"> <Link to={`/products/${category.CategoryId}`}>{category.Name}</Link> </li>
                )
              }
            </ul>
            <div className="w-25">
               <form method="get" action="/results">
                <div className="input-group">
                 <input type="text" name="search" placeholder="search" className="form-control" />
                 <button className="bi bi-search btn btn-dark"></button>
               </div>
               </form>
            </div>
        </div>
    )
}